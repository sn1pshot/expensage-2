import Image from "next/image";
import styles from "./page.module.css";

export default function Features() {
  return (
    // <div>
    //   <div className="flex-col">
    //     <div>
    //     <div className={styles.title}>
    //       <h>Scan your Bills</h>
    //     </div>
    //     <div>
    //       <h>
    //         The user will have the ability to view their expense history along
    //         with the categories of their expenditures.
    //       </h>
    //     </div>
    //     </div>
    //     <div>
    //       <Image src="/FIRST.svg" alt="logo" width={713} height={535}/>
    //     </div>
    //   </div>
    //   <div></div>
    //   <div></div>
    // </div>
    <div>
      <div>
        <div className={styles.title}>
          <h>Scan your Bills</h>
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
      <div></div>
      <div></div>
    </div>
  );
}
