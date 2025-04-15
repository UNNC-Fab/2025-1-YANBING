# IOT and Interaction

## 1. Dfinition of IOT

The Internet of Things (IoT) refers to a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity, allowing them to collect and share data. This interconnectedness enables devices to communicate with each other and with cloud services, facilitating automation and data analysis. The term was first coined by Kevin Ashton in 1999, and it encompasses a wide range of applications, from smart home devices to industrial automation.

![1](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/iot4.png)

Platforms:ALiyun, AWS, AzureLOT etc

## 2. Arduino IOT Design

Click the [here](https://app.arduino.cc/) and add the devices.

![3](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152015.png)

Then select the device type.

![4](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152111.png)

Remember your device ID and Password.

![5](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152212.png)

Then, add the things.

![6](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152338.png)

After adding things, you need to add variables.

![7](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152510.png)

To add variable, fill the name and type.

![8](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152541.png)

FIll the float type.

![9](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152815.png)
 
 Add the other three varables.

 ![10](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152751.png)

 Associate the esp32 XIAO c3.

 ![11](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20152908.png)

 Then, set your newwork.

 ![13](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20175902.png)

![12](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20153206.png)

 After adding them, the networking code was genrated.

 ![14](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20153243.png)

 Then, open the local Arduino IDE, pull the code to offline.

 ![15](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20163956.png)

 Set the hardware.

 ![16](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250415180518.jpg)

 Vertify and upload the code. 

 ![17](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20175902.png)

 The distance can be preview in the Arduino IDE.

![2](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-15%20174610.png)

 The code is shown as follows:
```bash
#include "DHT.h"
#define DHTPIN A1     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));
  dht.begin();
}

void loop() {
  delay(2000);
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(f);
  Serial.println(F("°F"));
}
```
