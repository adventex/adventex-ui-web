import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "นโยบายการใช้คุกกี้",
  description: "นโยบายการใช้คุกกี้ของ บริษัท แอดเวนเท็กซ์ อินเตอร์เนชั่นแนล กรุ๊ป จำกัด",
};

export default function CookiesPage() {
  return (
    <div className="border-grid relative">
      {/* Header Section */}
      <div className="container-wrapper border-b border-dashed border-border/70">
        <section className="mx-auto max-w-screen-lg px-4 md:px-6">
          <div className="flex items-center justify-center border-l border-r border-t border-dashed border-border/70 py-12">
            <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">นโยบายการใช้คุกกี้</h1>
          </div>
        </section>
      </div>

      {/* Last Updated Section */}
      <div className="container-wrapper border-b border-dashed border-border/70">
        <section className="mx-auto max-w-screen-lg px-4 md:px-6">
          <div className="flex items-center justify-center border-l border-r border-t border-dashed border-border/70 py-8">
            <p className="text-sm text-muted-foreground">อัพเดตล่าสุด 26 กุมภาพันธ์ 2568</p>
          </div>
        </section>
      </div>

      {/* Main Content + Sidebar */}
      <div className="container-wrapper">
        <section className="container grid grid-cols-1 gap-6 md:grid-cols-3 [&_li]:text-muted-foreground [&_strong]:text-foreground">
          {/* Main Content */}
          <div className="order-2 border-r border-dashed border-border/70 p-8 pb-16 md:order-1 md:col-span-2">
            <div className="prose max-w-none">
              <p className="mb-6 text-muted-foreground">
                บริษัท แอดเวนเท็กซ์ อินเตอร์เนชั่นแนล กรุ๊ป จำกัด (&quot;บริษัท&quot; หรือ &quot;เรา&quot;)
                เคารพสิทธิความเป็นส่วนตัวของลูกค้า รวมถึงบุคคลธรรมดาที่ดำเนินการแทนลูกค้าองค์กร (&quot;ท่าน&quot;)
                และเพื่อให้มั่นใจว่าข้อมูลส่วนบุคคลของท่านได้รับความคุ้มครอง
                เราจึงจัดทำนโยบายความเป็นส่วนตัวฉบับนี้ขึ้นเพื่อแจ้งให้ท่านทราบถึงรายละเอียดเกี่ยวกับการเก็บรวบรวม
                การใช้ และการเปิดเผย (รวมเรียกว่า &quot;การประมวลผล&quot;) ข้อมูลส่วนบุคคลของท่าน
                รวมถึงการลบและทำลายข้อมูลตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
                โดยครอบคลุมทั้งการประมวลผลผ่านช่องทางออนไลน์และช่องทางอื่น ๆ
              </p>

              <div id="what" className="relative h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">คุกกี้คืออะไร</h2>
                <p className="mb-3 text-muted-foreground">
                  คุกกี้ คือ ไฟล์ข้อมูลขนาดเล็กที่เว็บไซต์บันทึกลงในอุปกรณ์ของท่านเมื่อท่านเข้าชมเว็บไซต์ของเรา
                  คุกกี้ช่วยให้เราสามารถจดจำการตั้งค่าและการใช้งานของท่าน
                  เพื่อมอบประสบการณ์การใช้งานที่ดีและเหมาะสมกับท่าน
                  รวมถึงช่วยให้เราสามารถปรับปรุงเว็บไซต์และบริการของเราให้ตรงกับความต้องการของผู้ใช้งานมากขึ้น
                </p>
              </div>

              <div id="why" className="relative mt-8 h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">เหตุผลในการใช้คุกกี้</h2>
                <p className="mb-3 text-muted-foreground">
                  เราใช้คุกกี้เพื่อเก็บรวบรวมข้อมูลเกี่ยวกับพฤติกรรมการใช้งานเว็บไซต์ของท่าน รวมถึงการตั้งค่าต่างๆ
                  เพื่อให้เราสามารถปรับปรุงประสบการณ์การใช้งานเว็บไซต์ได้อย่างเหมาะสม คุกกี้ช่วยให้เราสามารถ:
                </p>
                <ul className="list-disc pl-6">
                  <li className="mb-2 text-muted-foreground">
                    จดจำการตั้งค่าและการใช้งานของท่าน เพื่อให้ท่านไม่ต้องป้อนข้อมูลซ้ำทุกครั้งที่เข้าชมเว็บไซต์
                  </li>
                  <li className="mb-2 text-muted-foreground">
                    วิเคราะห์การใช้งานเว็บไซต์ เพื่อปรับปรุงประสิทธิภาพและฟังก์ชันการทำงานของเว็บไซต์
                  </li>
                  <li className="mb-2 text-muted-foreground">ปรับแต่งเนื้อหาและโฆษณาให้เหมาะสมกับความสนใจของท่าน</li>
                  <li className="mb-2 text-muted-foreground">รักษาความปลอดภัยและป้องกันการใช้งานที่ไม่ได้รับอนุญาต</li>
                </ul>
              </div>

              <div id="types" className="relative mt-8 h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">ประเภทของคุกกี้ที่เราใช้</h2>
                <p className="mb-3 text-muted-foreground">
                  เราใช้คุกกี้หลายประเภทบนเว็บไซต์ของเรา ซึ่งสามารถแบ่งได้ดังนี้:
                </p>
                <ul className="list-disc pl-6">
                  <li className="mb-2 text-muted-foreground">
                    <strong>คุกกี้ที่จำเป็น (Necessary Cookies)</strong>:
                    คุกกี้ประเภทนี้มีความจำเป็นต่อการทำงานพื้นฐานของเว็บไซต์ ช่วยให้ท่านสามารถใช้งานเว็บไซต์ได้อย่างปกติ
                    เช่น การจดจำการเข้าสู่ระบบ การรักษาความปลอดภัย และการจัดการเซสชัน
                  </li>
                  <li className="mb-2 text-muted-foreground">
                    <strong>คุกกี้เพื่อการวิเคราะห์ (Analytical Cookies)</strong>:
                    คุกกี้ประเภทนี้ช่วยให้เราเข้าใจวิธีการใช้งานเว็บไซต์ของท่าน เช่น หน้าที่ท่านเข้าชม ระยะเวลาที่ใช้งาน
                    และข้อผิดพลาดที่อาจเกิดขึ้น ข้อมูลเหล่านี้ช่วยให้เราปรับปรุงประสิทธิภาพของเว็บไซต์
                  </li>
                  <li className="mb-2 text-muted-foreground">
                    <strong>คุกกี้เพื่อการตลาด (Marketing Cookies)</strong>:
                    คุกกี้ประเภทนี้ใช้เพื่อติดตามพฤติกรรมการใช้งานของท่านบนเว็บไซต์
                    เพื่อนำเสนอโฆษณาที่เกี่ยวข้องและตรงกับความสนใจของท่าน
                  </li>
                  <li className="mb-2 text-muted-foreground">
                    <strong>คุกกี้เพื่อปรับแต่งการใช้งาน (Preference Cookies)</strong>:
                    คุกกี้ประเภทนี้ช่วยจดจำการตั้งค่าและการเลือกของท่าน เช่น ภาษาที่ใช้ ขนาดตัวอักษร หรือธีมที่ท่านเลือก
                  </li>
                </ul>
              </div>

              <div id="management" className="relative mt-8 h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">การจัดการคุกกี้</h2>
                <p className="mb-3 text-muted-foreground">ท่านสามารถควบคุมและจัดการคุกกี้ได้ด้วยวิธีต่อไปนี้:</p>
                <ul className="list-disc pl-6">
                  <li className="mb-2 text-muted-foreground">
                    <strong>การตั้งค่าเบราว์เซอร์</strong>:
                    ท่านสามารถตั้งค่าเบราว์เซอร์ของท่านให้ปฏิเสธคุกกี้ทั้งหมดหรือแจ้งเตือนเมื่อมีการส่งคุกกี้
                    อย่างไรก็ตาม หากท่านปฏิเสธคุกกี้ทั้งหมด ฟังก์ชันบางอย่างของเว็บไซต์อาจไม่ทำงานอย่างถูกต้อง
                  </li>
                  <li className="mb-2 text-muted-foreground">
                    <strong>การตั้งค่าคุกกี้บนเว็บไซต์</strong>:
                    เราอาจมีแบนเนอร์หรือการตั้งค่าคุกกี้บนเว็บไซต์ที่อนุญาตให้ท่านเลือกประเภทของคุกกี้ที่ท่านยินยอมให้เราใช้
                  </li>
                </ul>
                <p className="mb-3 mt-4 text-muted-foreground">
                  โปรดทราบว่า การปฏิเสธคุกกี้บางประเภทอาจส่งผลต่อประสบการณ์การใช้งานเว็บไซต์ของท่าน
                  และอาจทำให้บางฟังก์ชันไม่สามารถใช้งานได้อย่างเต็มประสิทธิภาพ
                </p>
              </div>

              <div id="changes" className="relative mt-8 h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">การเปลี่ยนแปลงนโยบายคุกกี้</h2>
                <p className="mb-3 text-muted-foreground">
                  กรณีที่มีการแก้ไขเปลี่ยนแปลงนโยบายคุกกี้นี้ เราจะประกาศนโยบายคุกกี้ฉบับใหม่ผ่านทางเว็บไซต์นี้
                  ซึ่งท่านควรเข้ามาตรวจสอบความเปลี่ยนแปลงนโยบายคุกกี้เป็นครั้งคราว
                  โดยนโยบายคุกกี้ฉบับใหม่จะมีผลบังคับใช้ทันทีในวันที่ประกาศ
                </p>
              </div>

              <div id="contact" className="relative mt-8 h-auto scroll-mt-[32px] border-t pt-8">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">ติดต่อเรา</h2>
                <p className="mb-3 text-muted-foreground">
                  หากท่านมีข้อสงสัยเกี่ยวกับนโยบายคุกกี้นี้ สามารถติดต่อเราได้ที่{" "}
                  <a href="mailto:privacy@adventex.com" className="text-foreground no-underline hover:underline">
                    support@adventex.co.th
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="order-1 md:order-2 md:col-span-1">
            <div className="sticky top-[4rem] h-min max-h-[calc(100svh-4rem)] overflow-y-auto p-6">
              <div className="mb-[1.375rem] h-auto font-[600]">นโยบายการใช้คุกกี้</div>
              <ol className="flex flex-col gap-3">
                <li>
                  <ol className="flex flex-col gap-3">
                    <li>
                      <a className="block text-sm transition-colors duration-150 hover:text-foreground" href="#what">
                        คุกกี้คืออะไร
                      </a>
                    </li>
                    <li>
                      <a className="block text-sm transition-colors duration-150 hover:text-foreground" href="#why">
                        เหตุผลในการใช้คุกกี้
                      </a>
                    </li>
                    <li>
                      <a className="block text-sm transition-colors duration-150 hover:text-foreground" href="#types">
                        ประเภทของคุกกี้
                      </a>
                    </li>
                    <li>
                      <a
                        className="block text-sm transition-colors duration-150 hover:text-foreground"
                        href="#management"
                      >
                        การจัดการคุกกี้
                      </a>
                    </li>
                    <li>
                      <a className="block text-sm transition-colors duration-150 hover:text-foreground" href="#changes">
                        การเปลี่ยนแปลงนโยบาย
                      </a>
                    </li>
                    <li>
                      <a className="block text-sm transition-colors duration-150 hover:text-foreground" href="#contact">
                        ติดต่อเรา
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
