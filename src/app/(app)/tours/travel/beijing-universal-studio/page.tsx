import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function BeijingUniversalStudioPage() {
  return (
    <div className="container-wrapper">
      <div className="container py-2 sm:py-4">
        <div className="relative grid grid-cols-1 gap-1 overflow-hidden rounded-lg sm:gap-2 sm:rounded-xl md:grid-cols-12">
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
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold">ฮาร์บิน - โม่เหอ 8 วัน 5 คืน สัมผัสอากาศหนาวติดลบ -30º</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Harbin, China</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>8 วัน 5 คืน</span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6 grid grid-cols-2">
                  <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
                  <TabsTrigger value="itinerary">กำหนดการเดินทาง</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold">คำอธิบายทัวร์</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🌟 สัมผัสประสบการณ์ฤดูหนาวสุดพิเศษในเมืองน้ำแข็งที่มีชื่อเสียงระดับโลก</li>
                      <li>🌨️ ชมความงดงามของหิมะและน้ำแข็งในเมืองฮาร์บินและหมู่บ้านหิมะ</li>
                      <li>🏞️ เพลิดเพลินกับสถาปัตยกรรมที่ผสมผสานระหว่างตะวันตกและตะวันออก</li>
                      <li>🎭 สัมผัสวัฒนธรรมท้องถิ่นและประวัติศาสตร์อันยาวนานของภูมิภาคตงเป่ย</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ไฮไลท์สำคัญ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏠 หมู่บ้านหิมะ บรรยากาศเสมือนหลุดเข้าไปในโลกเทพนิยาย มีหิมะหนากว่า 1 เมตร</li>
                      <li>🏂 ย่าปู่ลี่ สกีรีสอร์ทที่ใหญ่ที่สุดในเอเชียและเคยเป็นสถานที่จัดการแข่งขันโอลิมปิกฤดูหนาว</li>
                      <li>🏛️ เทศกาลน้ำแข็งและหิมะฮาร์บิน สวนสนุกขนาดใหญ่ที่สร้างจากน้ำแข็ง</li>
                      <li>🚂 เมืองเหิงเต๋าเหอจื่อ เมืองแห่งรถไฟที่มีประวัติศาสตร์เกี่ยวกับทางรถไฟทรานส์-ไซบีเรีย</li>
                      <li>🐯 สวนเสือโคร่งไซบีเรีย หนึ่งในศูนย์เพาะเลี้ยงเสือโคร่งไซบีเรียที่ใหญ่ที่สุดในโลก</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">รายละเอียดที่น่าสนใจ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏰 โบสถ์เซนต์โซเฟีย สถาปัตยกรรมสไตล์รัสเซียที่เป็นสัญลักษณ์ของเมืองฮาร์บิน</li>
                      <li>🛣️ ถนนจงหยาง ถนนคนเดินที่มีอาคารสไตล์ยุโรปสองฝั่งถนน</li>
                      <li>🚉 สะพานข้ามทางรถไฟตะวันออกกลาง สถานที่สำคัญทางประวัติศาสตร์ของเมืองฮาร์บิน</li>
                      <li>🎨 หมู่บ้านภาพวาดสีน้ำมันเหิงเต๋าเหอจื่อ แหล่งที่มีชื่อเสียงในด้านศิลปะ</li>
                      <li>🚄 คลังเก็บหัวรถจักรรถไฟตะวันออกกลาง โรงจอดรถที่มีรูปทรงสถาปัตยกรรมรัสเซีย</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">จุดท่องเที่ยวเสริม</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🎭 พิพิธภัณฑ์ลูฟวร์ฮาร์บิน แหล่งวัฒนธรรมและศิลปะที่น่าสนใจ</li>
                      <li>🎵 สวนสาธารณะดนตรี สวนที่ออกแบบมาเพื่อให้ผู้มาเยือนได้เพลิดเพลินกับดนตรี</li>
                      <li>🌲 สวนสาธารณะจ้าวหลิน ชมศิลปะโคมไฟน้ำแข็งที่มีความแปลกใหม่และสวยงาม</li>
                      <li>🏛️ พิพิธภัณฑ์ Acheng Jin Shangjing จัดแสดงประวัติศาสตร์ราชวงศ์จิน</li>
                      <li>🛁 วัฒนธรรมการอาบน้ำแบบท้องถิ่นที่เมืองอาเฉิง</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">กิจกรรมพิเศษ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🐎 นั่งรถม้าเลื่อนชมทัศนียภาพหิมะ</li>
                      <li>🏂 เล่นสกีที่ย่าปู่ลี่ (ระดับเริ่มต้น 3 ชั่วโมง)</li>
                      <li>🎣 ตกปลาในธารน้ำแข็ง กิจกรรมกลางแจ้งที่ท้าทายและผ่อนคลาย</li>
                      <li>🌿 กิจกรรมการขุดโสมในหิมะ สัมผัสประสบการณ์เก็บเกี่ยวโสมในฤดูหนาว</li>
                      <li>🏕️ ชมการแสดงปาร์ตี้รอบกองไฟในหมู่บ้านหิมะ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อมูลการเดินทาง</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✈️ เดินทางโดยสายการบินไชน่าอีสเทิร์นแอร์ไลน์</li>
                      <li>🚌 การเดินทางระหว่างเมืองใช้รถบัสคุณภาพสูงสำหรับพื้นที่ที่มีหิมะ</li>
                      <li>🏨 พักโรงแรมระดับ 4 ดาวตลอดการเดินทาง</li>
                      <li>🧳 น้ำหนักกระเป๋าโหลดใต้ท้องเครื่อง 23 กก. 1 ใบ</li>
                      <li>🧣 มีอุปกรณ์กันหนาวให้บริการ ประกอบด้วย ผ้าพันคอ ถุงมือ แผ่นแปะร้อนกันหนาว</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อมูลทางประวัติศาสตร์</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🏛️ ฮาร์บินเคยเป็นศูนย์กลางการค้าระหว่างจีนและรัสเซียในต้นศตวรรษที่ 20</li>
                      <li>🛤️ เมืองเหิงเต๋าเหอจื่อเกี่ยวข้องกับประวัติศาสตร์ทางรถไฟทรานส์-ไซบีเรียและอิทธิพลรัสเซีย</li>
                      <li>🏙️ ถนนจงหยางสะท้อนการผสมผสานระหว่างสถาปัตยกรรมยุโรปและวัฒนธรรมท้องถิ่น</li>
                      <li>🍲 อาหารพื้นเมืองตงเป่ยมีเอกลักษณ์เฉพาะตัวด้วยรสชาติเข้มข้นเพื่อให้พลังงานในอากาศหนาว</li>
                      <li>🏯 เมืองอาเฉิงเคยเป็นที่ตั้งของเมืองหลวงราชวงศ์จินเมื่อประมาณ 900 ปีก่อน</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">ข้อควรระวังและคำแนะนำ</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🌡️ เตรียมเสื้อผ้ากันหนาวให้เพียงพอ เนื่องจากอุณหภูมิอาจต่ำมาก</li>
                      <li>🕒 ปรับนาฬิกาเป็นเวลาท้องถิ่น (ประเทศจีนเร็วกว่าประเทศไทย 1 ชั่วโมง)</li>
                      <li>🔌 เตรียมอุปกรณ์อิเล็กทรอนิกส์และแบตเตอรี่สำรองเพราะอากาศหนาวทำให้แบตเตอรี่หมดเร็ว</li>
                      <li>📱 ควรเตรียมแอปพลิเคชันแปลภาษาติดตัวไว้สำหรับการสื่อสาร</li>
                      <li>💰 เตรียมเงินสกุลหยวนสำหรับซื้อของในพื้นที่ห่างไกล</li>
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
                        กรุงเทพฯ - เซี่ยงไฮ้ - ฮาร์บิน (รับอุปกรณ์กันหนาว)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 2
                        </span>
                        ฮาร์บิน - ย่าปู่ลี่ (เล่นสกี, นั่งรถม้าเลื่อน) - แม่น้ำหมู่ตัน
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 3
                        </span>
                        แม่น้ำหมู่ตัน - เหิงเต๋าเหอจื่อ (คลังรถไฟ, สวนเสือโคร่ง) - หมู่บ้านหิมะ (ปาร์ตี้รอบกองไฟ)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 4
                        </span>
                        หมู่บ้านหิมะ - อาเฉิง (พิพิธภัณฑ์ Acheng Jin Shangjing)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 5
                        </span>
                        อาเฉิง - ฮาร์บิน (โบสถ์เกอซิน, โบสถ์เซนต์โซเฟีย, ถนนจงหยาง, เทศกาลน้ำแข็งและหิมะ)
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 6
                        </span>
                        ฮาร์บิน - เซี่ยงไฮ้
                      </h4>
                      <p className="mt-1 text-muted-foreground">{``}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pb-4 pl-4">
                      <h4 className="flex items-center gap-2 font-semibold">
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                          วันที่ 7
                        </span>
                        เซี่ยงไฮ้ - กรุงเทพฯ
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
