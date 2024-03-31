import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/Firbase";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <section className="container ">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
        <div className="p-6 flex flex-row items-center space-y-0 justify-between">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Profile
          </h3>
          <div className="flex gap-4"> 
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 ml-auto bg-blue-500 text-white">
            Edit
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground h-10 px-4 py-2 ml-auto bg-red-400 text-white" onClick={handleLogout}>
            Log Out
          </button>
          </div>
        </div>
        <div className="p-6 grid gap-4 md:gap-2">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 relative rounded-full overflow-hidden md:w-24 md:h-24">
                <img
                  src="https://vexacore.vercel.app/assets/p2-UWzFuWPd.jpg"
                  width="100"
                  height="100"
                  alt="Avatar"
                  className="rounded-full object-cover"
                  // style="aspect-ratio:100/100;object-fit:cover"
                />
              </div>
            </div>
            <div className="grid gap-1 text-sm md:col-span-2 md:text-base">
              <div className="font-semibold">Sophia Anderson</div>
              <div className="text-gray-500 dark:text-gray-400">
                {currentUser && currentUser.email}
              </div>
              <div>23 total orders</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm mt-2 bg-white">
        <div className="flex flex-col space-y-1.5 p-6 ">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Order history
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-4 md:gap-2">
            <div className="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
              <div className="font-medium">Order #3102</div>
              <div className="text-gray-500 dark:text-gray-400">
                June 23, 2022
              </div>
              <div className="ml-auto font-medium">$150.00</div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
            <div className="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
              <div className="font-medium">Order #3101</div>
              <div className="text-gray-500 dark:text-gray-400">
                June 22, 2022
              </div>
              <div className="ml-auto font-medium">$120.00</div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
            <div className="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
              <div className="font-medium">Order #3100</div>
              <div className="text-gray-500 dark:text-gray-400">
                June 21, 2022
              </div>
              <div className="ml-auto font-medium">$100.00</div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
          </div>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm mt-2 bg-white">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Payment methods
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-2">
            <div className="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
              <div className="font-medium">Visa ending in 4242</div>
              <div className="text-gray-500 dark:text-gray-400">
                Sophia Anderson
              </div>
              <div className="ml-auto font-medium">Primary</div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
            <div className="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
              <div className="font-medium">Mastercard ending in 1234</div>
              <div className="text-gray-500 dark:text-gray-400">
                Sophia Anderson
              </div>
              <div className="ml-auto">
                <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  Expiring soon
                </div>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
          </div>
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm mt-2 bg-white">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Address
          </h3>
        </div>
        <div className="w-[50%] m-auto pb-6">
          <Button text="Add Address" />
        </div>
      </div>
    </section>

    //      </Button> */}
    //     </div>
    //     <div classNameName="grid gap-4 md:gap-2">
    //       <div classNameName="grid md:grid-cols-3 gap-4">
    //         <div classNameName="flex items-center">
    //           <div classNameName="w-12 h-12 relative rounded-full overflow-hidden md:w-24 md:h-24">
    //             <img
    //               alt="Avatar"
    //               classNameName="rounded-full object-cover"
    //               height="100"
    //               src="/placeholder.svg"
    //               style={{
    //                 aspectRatio: "100/100",
    //                 objectFit: "cover",
    //               }}
    //               width="100"
    //             />
    //           </div>
    //         </div>
    //         <div classNameName="grid gap-1 text-sm md:col-span-2 md:text-base">
    //           <div classNameName="font-semibold">Sophia Anderson</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">sophia@example.com</div>
    //           <div>23 total orders</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <h2 classNameName='text-2xl font-semibold'>Order history</h2>
    //     </div>
    //     <div>
    //       <div classNameName="flex flex-col gap-4 md:gap-2">
    //         <div classNameName="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
    //           <div classNameName="font-medium">Order #3102</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">June 23, 2022</div>
    //           <div classNameName="ml-auto font-medium">$150.00</div>
    //         </div>
    //         <hr />
    //         <div classNameName="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
    //           <div classNameName="font-medium">Order #3101</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">June 22, 2022</div>
    //           <div classNameName="ml-auto font-medium">$120.00</div>
    //         </div>
    //         <hr />
    //         <div classNameName="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
    //           <div classNameName="font-medium">Order #3100</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">June 21, 2022</div>
    //           <div classNameName="ml-auto font-medium">$100.00</div>
    //         </div>
    //         <hr />
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <h2 classNameName='text-2xl font-semibold'>Payment methods</h2>
    //     </div>
    //     <div>
    //       <div classNameName="flex flex-col gap-2">
    //         <div classNameName="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
    //           <div classNameName="font-medium">Visa ending in 4242</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">Sophia Anderson</div>
    //           <div classNameName="ml-auto font-medium">Primary</div>
    //         </div>
    //         <hr />
    //         <div classNameName="grid items-center gap-2 text-sm md:grid-cols-3 md:gap-1">
    //           <div classNameName="font-medium">Mastercard ending in 1234</div>
    //           <div classNameName="text-gray-500 dark:text-gray-400">Sophia Anderson</div>
    //           <div classNameName="ml-auto">
    //             <span>Expiring soon</span>
    //           </div>
    //         </div>
    //         <hr />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default UserProfile;
