import avatar from "@/assets/images/avatar.avif";
import UserName from "@/components/UserName";
import { AppDispatch } from "@/services/store";
import { setProfile } from "@/services/store/auth/auth.slice";
import { logout } from "@/services/store/auth/auth.thunk";
import clsx from "clsx";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

const Content = () => {
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();
  return (
    <>
      <section className="bg-blueGray-200 relative pb-16">
        <div className="container mx-auto px-4">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap items-start justify-center">
                <div className="mt-[-100px] h-[200px] w-[200px] overflow-hidden rounded-circle">
                  <img alt="..." src={avatar} />
                </div>
                <div className="w-full px-4 text-right lg:order-3 lg:w-4/12">
                  <div className="px-3 sm:mt-0 lg:py-6">
                    <button
                      className={clsx(
                        "mb-1 -translate-y-1/2 translate-x-1/2 rounded bg-red-500 px-4 py-2",
                        "text-[10px] font-bold uppercase text-white shadow outline-none transition-all",
                        "duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red-600",
                        "sm:mr-2 lg:translate-x-0 lg:translate-y-0 lg:text-xs",
                      )}
                      type="button"
                      onClick={() => {
                        dispatch(logout());
                        localStorage.clear();
                        queryClient.invalidateQueries("profile");
                        dispatch(setProfile(undefined));
                      }}
                    >
                      Log out
                    </button>
                  </div>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                <h3 className="block lg:hidden text-blueGray-700 text-3xl text-center font-semibold leading-normal">
                  <UserName />
                </h3>
                  <div className="flex justify-center lg:py-4 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">22</span>
                      <span className="text-blueGray-400 text-sm">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">10</span>
                      <span className="text-blueGray-400 text-sm">Photos</span>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">89</span>
                      <span className="text-blueGray-400 text-sm">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="hidden lg:block text-blueGray-700 mb-2 text-4xl font-semibold leading-normal">
                  <UserName />
                </h3>
                <div className="text-blueGray-400 mb-2 mt-0 text-sm font-bold uppercase leading-normal">
                  <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg" />
                  Los Angeles, California
                </div>
                <div className="text-blueGray-600 mb-2 mt-10">
                  <i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="text-blueGray-600 mb-2">
                  <i className="fas fa-university text-blueGray-400 mr-2 text-lg" />
                  University of Computer Science
                </div>
              </div>
              <div className="border-blueGray-200 border-t py-10 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                      An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
                      records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable
                      range.
                    </p>
                    <span className="font-normal text-pink-500 cursor-pointer select-none">
                      Show more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
