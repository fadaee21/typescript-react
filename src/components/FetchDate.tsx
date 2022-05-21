import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../state/hooks";
import { fetch } from "../state/reducers/fetchSlice";

export const FetchDate: () => JSX.Element = () => {
  const [user, setUser] = useState<string>("1");
  const dispatch = useAppDispatch();
  const { fetchItems } = useAppSelector((e) => e.fetch);

  const fetchItemsFiltered = fetchItems.filter((e) => e.userId === +user);
  return (
    <div>
      <hr />
      <input type="number" onChange={(e) => setUser(e.target.value)} />
      {/*  this button just change the id of initialState for test */}
      <button onClick={() => dispatch(fetch(7))}>idUser</button>
      {fetchItemsFiltered.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.userId}</h3>
          </div>
        );
      })}
    </div>
  );
};
