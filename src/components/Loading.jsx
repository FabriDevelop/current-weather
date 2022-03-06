import React from "react";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center m-10">
      <SyncLoader color={"#3B82F6"} size={20} />
    </div>
  );
}
