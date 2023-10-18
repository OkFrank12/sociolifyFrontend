import { FaUsers } from "react-icons/fa";
import { PiGitPullRequestLight } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { MdAddTask } from "react-icons/md";
import { useViewAllUser } from "../../hooks/useCustomHook";
import {
  beFriendAPI,
  likeUserAPI,
  sendFriendRequestMailAPI,
} from "../../api/userAPI";
import Swal from "sweetalert2";
import LoadingScreen from "../../utils/LoaderScreen";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { data, isLoading } = useViewAllUser();
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

  function addFriend(id: any) {
    beFriendAPI(state?._id, id).then((res: any) => {
      return res;
    });
  }

  return (
    <>
      {isLoading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : data?.length === 0 ? (
        <div className="h-[calc(100vh-90px)] w-full flex items-center justify-center font-bold text-[20px] text-center">
          There are no active users currently...😒😒❌❌❌
        </div>
      ) : (
        data?.map((el: any) => (
          <div
            key={el?._id}
            className="w-[300px] m-2 h-[330px] overflow-hidden rounded-t-full border pt-10 flex flex-col items-center shadow-md"
          >
            <div className="w-[120px] capitalize flex justify-center items-center text-[300%] h-[130px] rounded-t-full border">
              {el?.name.charAt(0)}
            </div>
            <div className="text-center">
              <p className="text-emerald-400 capitalize text-[20px]">
                @{el?.name}
              </p>
              <p className="text-slate-400 text-[13px]">{el?.email}</p>
            </div>
            {el?.accept === true ? (
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
            ) : null}
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
                  <span className="text-[13px] text-slate-500">likes</span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <p
                    onClick={() => {
                      friendRequest(el?._id);
                      console.log(el?._id)
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
                  <span className="text-[13px] text-slate-500">request</span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <p className="text-emerald-500 flex  cursor-pointer items-center font-bold">
                    <span className="mr-1">{el?.friends.length}</span>
                    <FaUsers />
                  </p>
                  <span className="text-[13px] text-slate-500">friends</span>
                </div>
              </div>
              <p className="text-slate-500 text-[13px]">
                lives at: <span className="capitalize">{el?.location}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProfileCard;
