import Image from "next/image";
import styles from "./page.module.css";

export default function Features() {
  return (
    <div className="mt-24">
      <div>
        <div className={styles.title}>
          {/* <h>Scan your Bills</h> */}
          <Image src="billsz.svg" alt="logo" width={713} height={535} />
        </div>
        <div className="flex">
          <div className="item-center py-24  text-2xl font-body mt-10 mx-5">
            <h>
              Users will have the capability to<br></br>
              upload an image to the web<br></br>
              application which will<br></br>
              subsequently undergo text<br></br>
              conversion through the<br></br>
              employed machine learning<br></br>
              model.
            </h>
          </div>
          <div className="ml-auto">
            <Image src="/FIRST.svg" alt="logo" width={713} height={535} />
          </div>
        </div>
      </div>
      <div>
        <div className="p-28"></div>
        <div>
          <div className={styles.title}>
            {/* <h>Expense Tracker</h> */}
            <div className="mx-40 ">
              <Image src="/wait.svg" alt="logo" width={892} height={77} />
            </div>
          </div>
          <div className="flex">
            <div className="mr-auto mt-20 px-20 py-10">
              <Image src="/2.svg" alt="logo" width={629} height={535} />
            </div>
            <div className="item-center py-56  text-3xl font-body mt-10 px-16">
              <h>
                The user will have<br></br>
                the ability to view<br></br>
                their expense history<br></br>
                along with the categories of<br></br>
                their expenditures<br></br>
              </h>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="p-10"></div>
      <div className={styles.title}>
          {/* <h>Scan your Bills</h> */}
          <Image src="ELAELA.svg" alt="logo" width={713} height={535} />
        </div>
        <div className="flex">
          <div className="item-center py-24  text-2xl font-body mt-10 mx-5">
            <h>
              Users have the option to establish a<br></br>
              predidefined expenditure limit for a<br></br>
              specefic time frame. In the event that<br></br>
              thier expenses surpass the limit, the<br></br>
              user will recieve a notification or<br></br>
              warning.<br></br>
              
            </h>
          </div>
          <div className="ml-auto">
            <Image src="/3.svg" alt="logo" width={450} height={352} />
          </div>
        </div>
      </div>
    </div>
  );
}
