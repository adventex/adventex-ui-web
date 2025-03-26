import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";
import Image from "next/image";

export default function HarbinMohePage() {
  return (
    <div className="">
      <div>1</div>
      <Separator />
      <div className="mx-auto h-full w-full max-w-screen-lg px-2 sm:px-4">
        <h2 className="text-2xl font-bold">ฮาร์บิน - โม่เหอ 8 วัน 5 คืน สัมผัสอากาศหนาวติดลบ -30º</h2>
      </div>
      <div className="mx-auto h-full w-full max-w-screen-lg px-2 py-2 sm:px-4 sm:py-4">
        <div className="relative grid grid-cols-1 gap-1 overflow-hidden sm:gap-2 md:grid-cols-12">
          {/* Main large image */}
          <div className="relative col-span-7 h-[200px] cursor-pointer overflow-hidden sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg"
              alt="Main tour image"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 60vw"
              priority
            />
          </div>

          {/* Grid of smaller images */}
          <div className="col-span-5 hidden grid-cols-2 gap-1 sm:gap-2 md:grid">
            {/* First row */}
            <div className="relative h-[196px] cursor-pointer overflow-hidden lg:h-[246px]">
              <Image
                src="/placeholder.svg"
                alt="Tour image 2"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="relative h-[196px] cursor-pointer overflow-hidden lg:h-[246px]">
              <Image
                src="/placeholder.svg"
                alt="Tour image 3"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>

            {/* Second row */}
            <div className="relative h-[196px] cursor-pointer overflow-hidden lg:h-[246px]">
              <Image
                src="/placeholder.svg"
                alt="Tour image 4"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="relative h-[196px] cursor-pointer overflow-hidden lg:h-[246px]">
              <Image
                src="/placeholder.svg"
                alt="Tour image 5"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          </div>
        </div>

        <section className="container py-2 sm:py-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6 grid grid-cols-2">
                  <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
                  <TabsTrigger value="itinerary">กำหนดการเดินทาง</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">คำอธิบายทัวร์</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🌟 สัมผัสประสบการณ์ฤดูหนาวสุดพิเศษ ณ ดินแดนเหนือสุดของประเทศจีน</li>
                      <li>🌨️ ชมความงดงามของหิมะและน้ำแข็งในเมืองฮาร์บินและโม้เหอ</li>
                      <li>🏞️ เพลิดเพลินกับแหล่งท่องเที่ยวทางวัฒนธรรมที่ผสมผสานระหว่างตะวันตกและตะวันออก</li>
                      <li>🚂 สัมผัสประสบการณ์เดินทางด้วยรถไฟตู้นอนจากฮาร์บินสู่โม้เหอ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ไฮไลท์สำคัญ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏠 หมู่บ้านหิมะ (Snow Village) บรรยากาศเสมือนหลุดเข้าไปในโลกเทพนิยาย</li>
                      <li>🏂 สนุกกับกีฬาฤดูหนาวที่ย่าปู่ลี่ สกีรีสอร์ทที่ใหญ่ที่สุดในเอเชีย</li>
                      <li>🏛️ เทศกาลน้ำแข็งและหิมะฮาร์บิน เมืองแห่งน้ำแข็งที่มีชื่อเสียงระดับโลก</li>
                      <li>🎄 เยี่ยมชมหมู่บ้านคริสต์มาสโม้เหอ ที่ขึ้นชื่อว่าเป็นโลกแห่งคริสต์มาสแห่งเดียวในเอเชีย</li>
                      <li>🧭 อนุสาวรีย์อาร์กติกของจีน จุดเหนือสุดของประเทศจีน</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">รายละเอียดที่น่าสนใจ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏰 โบสถ์เซนต์โซเฟีย สถาปัตยกรรมสไตล์รัสเซียที่เป็นสัญลักษณ์ของเมืองฮาร์บิน</li>
                      <li>🛣️ ถนนจงหยาง ถนนคนเดินที่มีอาคารสไตล์ยุโรปสองฝั่งถนน</li>
                      <li>🚉 สถานีรถไฟตะวันออกกลาง สถานที่สำคัญทางประวัติศาสตร์ของเมืองฮาร์บิน</li>
                      <li>🌌 ชมทิวทัศน์ของแม่น้ำชายแดนจีน-รัสเซีย</li>
                      <li>
                        🦌 พบกับชนเผ่าเอ๋อเวินเค่อ กลุ่มชาติพันธุ์เพียงกลุ่มเดียวในประเทศจีนที่เลี้ยงกวางเรนเดียร์
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">จุดท่องเที่ยวเสริม</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🎭 พิพิธภัณฑ์ลูฟวร์ฮาร์บิน แหล่งวัฒนธรรมและศิลปะที่น่าสนใจ</li>
                      <li>🎵 สวนสาธารณะดนตรี สวนที่ออกแบบมาเพื่อให้ผู้มาเยือนได้เพลิดเพลินกับดนตรี</li>
                      <li>⛰️ ภูเขาเจ้าแม่กวนอิม วัดจีนที่ได้รับการยกย่องจากราชวงศ์ชิง</li>
                      <li>
                        🔥 หออนุสรณ์อัคคีภัย สถานที่รำลึกถึงเหตุการณ์ไฟป่าครั้งใหญ่ที่เกิดขึ้นในเมืองต้าซิงอันหลิง
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">กิจกรรมพิเศษ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🐎 นั่งรถม้าเลื่อนชมทัศนียภาพหิมะ</li>
                      <li>🏂 เล่นสกีที่ย่าปู่ลี่ (ระดับเริ่มต้น 3 ชั่วโมง)</li>
                      <li>🛷 สไลเดอร์น้ำแข็ง ที่หมู่บ้านหิมะ</li>
                      <li>🦌 เยี่ยมชมสวนกวางเรนเดียร์ที่หมู่บ้านคริสต์มาส</li>
                      <li>🏕️ ชมการแสดงพื้นเมืองที่หมู่บ้านหิมะ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อมูลการเดินทาง</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✈️ เดินทางโดยสายการบินเซินเจิ้นแอร์ไลน์</li>
                      <li>🚄 เดินทางจากฮาร์บินสู่โม้เหอด้วยรถไฟตู้นอน (ใช้เวลาประมาณ 17-20 ชั่วโมง)</li>
                      <li>🏨 พักโรงแรมระดับ 4 ดาวตลอดการเดินทาง</li>
                      <li>🧳 น้ำหนักกระเป๋าโหลดใต้ท้องเครื่อง 23 กก. 1 ใบ และสัมภาระถือขึ้นเครื่อง ไม่เกิน 7 กก.</li>
                      <li>🧣 มีอุปกรณ์กันหนาวให้บริการ ประกอบด้วย ผ้าพันคอ ถุงมือ แผ่นแปะร้อนกันหนาว</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อมูลทางประวัติศาสตร์</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏛️ ฮาร์บินเคยเป็นศูนย์กลางการค้าระหว่างจีนและรัสเซียในต้นศตวรรษที่ 20</li>
                      <li>🛤️ สถานีรถไฟตะวันออกกลางเป็นสัญลักษณ์ของความสัมพันธ์ระหว่างจีนกับรัสเซีย</li>
                      <li>🏙️ ถนนจงหยางสะท้อนการผสมผสานระหว่างศิลปะสถาปัตยกรรมยุโรปและวัฒนธรรมท้องถิ่นของจีน</li>
                      <li>
                        👥
                        ชนเผ่าเอ๋อเวินเค่อเป็นกลุ่มชาติพันธุ์กลุ่มเดียวที่เปลี่ยนจากสังคมดั้งเดิมไปสู่สังคมสังคมนิยมโดยตรง
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อควรระวังและคำแนะนำ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🌡️ เตรียมเสื้อผ้ากันหนาวให้เพียงพอ เนื่องจากอุณหภูมิที่โม้เหออาจต่ำถึง -40°C</li>
                      <li>🕒 ปรับนาฬิกาเป็นเวลาท้องถิ่น (ประเทศจีนเร็วกว่าประเทศไทย 1 ชั่วโมง)</li>
                      <li>💰 เตรียมค่าทิปไกด์และคนขับรถท่านละ 1,500 บาท</li>
                      <li>🔌 เตรียมอุปกรณ์อิเล็กทรอนิกส์และแบตเตอรี่สำรองเนื่องจากอากาศหนาวอาจทำให้แบตเตอรี่หมดเร็ว</li>
                      <li>📱 ควรเตรียมแอปพลิเคชันแปลภาษาติดตัวไว้สำหรับการสื่อสาร</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6">
                  <h3 className="mb-3 text-xl font-semibold">กำหนดการเดินทาง</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 1
                        </span>
                        กรุงเทพฯ - ฮาร์บิน (รับอุปกรณ์กันหนาว)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 2
                        </span>
                        ฮาร์บิน - หมู่บ้านหิมะ (นั่งรถม้าเลื่อน, ชมการแสดงพื้นเมือง)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 3
                        </span>
                        หมู่บ้านหิมะ - ย่าปู่ลี่ (เล่นสกี) - ฮาร์บิน (เทศกาลน้ำแข็งและหิมะ)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 4
                        </span>
                        ฮาร์บิน (โบสถ์เกอซิน, โบสถ์เซนต์โซเฟีย, ถนนจงหยาง) - เดินทางสู่โม้เหอด้วยรถไฟตู้นอน
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 5
                        </span>
                        โม้เหอ (ชนเผ่าเอ๋อเวินเค่อ, อนุสาวรีย์อาร์กติก) - หมู่บ้านคริสต์มาส
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 6
                        </span>
                        โม้เหอ (Polaris Plaza, หออนุสรณ์อัคคีภัย)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 7
                        </span>
                        โม้เหอ - ฮาร์บิน - ปักกิ่ง - กรุงเทพฯ
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>59,990.-</span>
                    <span className="text-sm font-normal text-muted-foreground">ต่อคน</span>
                  </CardTitle>
                  <CardDescription>รหัสทัวร์: CHINAHARBINMOHE10_17JAN</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">จำนวนผู้ร่วมเดินทาง</label>
                    <div className="relative">
                      <Select defaultValue="2">
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 คน</SelectItem>
                          <SelectItem value="2">2 คน</SelectItem>
                          <SelectItem value="3">3 คน</SelectItem>
                          <SelectItem value="4">4 คน</SelectItem>
                          <SelectItem value="5">5+ คน</SelectItem>
                        </SelectContent>
                      </Select>
                      <Users className="absolute right-10 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">ชื่อของท่าน</label>
                    <Input placeholder="Enter your full name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">อีเมลของท่าน</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">หมายเลขเบอร์โทรศัพท์ของท่าน</label>
                    <Input placeholder="+66 (66) 000-0000" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full">Book Now</Button>

                  <div className="max-w-prose text-center text-xs text-muted-foreground">
                    สำหรับการจองนี้นั้น ยังไม่มีการชำระเงินแต่อย่างใด ทางเราจะติดต่อท่านเพื่อยืนยันการจองอีกที
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
