import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { PiGitPullRequestLight } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import {
  // beFriendAPI,
  likeUserAPI,
  sendFriendRequestMailAPI,
} from "../api/userAPI";
import { useSelector } from "react-redux";
// import { MdAddTask } from "react-icons/md";
import Swal from "sweetalert2";

const SearchUser = () => {
  const [myresults, setMyResults] = useState<Array<{}>>([]);
  const [location, setLocation] = useState<string>("");
  const fetchData = async (value: any) => {
    return await axios
      .get("http://localhost:1000/api/views")
      .then((res: any) => {
        const json: [] = res.data.data;
        const result = json.filter((location: any) => {
          return (
            value &&
            location &&
            location?.location?.toLowerCase().includes(value)
          );
        });
        setMyResults(result);
      });
  };

  const onHandleChange = (value: any) => {
    setLocation(value);
    fetchData(value);
  };

  const state = useSelector((state: any) => state.user);

  function likeUser(id: any) {
    likeUserAPI(id).then((res: any) => {
      return res;
    });
  }
  function friendRequest(id: any) {
    sendFriendRequestMailAPI(state?._id, id).then((res: any) => {
      return res;
    });
  }

  // function addFriend(id: any) {
  //   beFriendAPI(state?._id, id).then((res: any) => {
  //     return res;
  //   });
  // }
  return (
    <>
      <div className="p-2">
        <p className="text-slate-500 font-bold">Friends</p>
        <div className="flex items-center h-[40px] p-2 rounded-md border w-[300px]">
          <RiSearch2Line />
          <input
            type="text"
            value={location}
            onChange={(e) => {
              onHandleChange(e.target.value);
            }}
            placeholder="search via location"
            className="text-[12px] h-full flex-1 ml-2 outline-none"
          />
        </div>
        <br />
        <div className="w-full flex flex-wrap justify-center">
          {myresults.length === 0 ? (
            <div className="flex text-rose-500 flex-col items-center ">
              <span className="text-[60px]">😵😵</span>no available data
              delivered yet?
            </div>
          ) : (
            myresults?.map((el: any) => {
              return (
                <div
                  key={el?._id}
                  className="w-[300px] m-2 h-[330px] overflow-hidden rounded-t-full border pt-10 flex flex-col items-center shadow-md"
                >
                  <div className="w-[120px] capitalize flex justify-center items-center text-[300%] h-[130px] rounded-t-full border">
                    {el?.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-400 capitalize text-[20px]">
                      {el?.name}
                    </p>
                    <p className="text-slate-400 text-[13px]">{el?.email}</p>
                  </div>
                  {/* {el?.accept === true ? (
                    <div
                      onClick={() => {
                        addFriend(el?._id);
                        Swal.fire({
                          icon: "success",
                          text: `${state?.name?.toUpperCase()} and ${el?.name?.toUpperCase()} are now friends`,
                        }).then(() => {
                          window.location.reload();
                        });
                      }}
                      className="text-emerald-500 items-center cursor-pointer hover:text-slate-500 duration-300 transition-all flex text-[15px]"
                    >
                      <MdAddTask />
                      <span className="ml-2">add</span>
                    </div>
                  ) : null} */}
                  <br />
                  <div className="flex flex-col items-center justify-between w-full px-3 h-[80px]">
                    <div className="flex w-full justify-between">
                      <div className="text-center flex flex-col items-center">
                        <p
                          onClick={() => {
                            likeUser(el?._id);
                            Swal.fire({
                              icon: "success",
                              text: "you have liked a user",
                              timer: 3000,
                              timerProgressBar: false,
                            }).then(() => {
                              window.location.reload();
                            });
                          }}
                          className="font-bold flex items-center cursor-pointer text-emerald-500"
                        >
                          <span className="mr-1">{el?.like}</span>
                          <SlLike />
                        </p>
                        <span className="text-[13px] text-slate-500">
                          likes
                        </span>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <p
                          onClick={() => {
                            friendRequest(el?._id);
                            Swal.fire({
                              icon: "success",
                              text: `A Request Mail has been sent to ${el?.name.toUpperCase()}`,
                              timer: 3000,
                              timerProgressBar: true,
                            });
                          }}
                          className="text-emerald-500 flex  cursor-pointer items-center font-bold"
                        >
                          <PiGitPullRequestLight />
                        </p>
                        <span className="text-[13px] text-slate-500">
                          request
                        </span>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <p className="text-emerald-500 flex  cursor-pointer items-center font-bold">
                          <span className="mr-1">{el?.friends.length}</span>
                          <FaUsers />
                        </p>
                        <span className="text-[13px] text-slate-500">
                          friends
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-[13px]">
                      lives at:{" "}
                      <span className="capitalize">{el?.location}</span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default SearchUser;
