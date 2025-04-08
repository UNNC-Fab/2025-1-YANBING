# Electric Design
## 1. Basic study of electronic components
**(1) Resistance**：
Resistance, in electricity, property of an electric circuit or part of a circuit that transforms electric energy into heat energy in opposing electric current. Resistance is often considered as localized in such devices as lamps, heaters, and resistors, in which it predominates, although it is characteristic of every part of a circuit, including connecting wires and electric transmission lines.

**(2) Capacitance**：
Capacitance is the ability of an object to store electric charge. It is measured by the change in charge in response to a difference in electric potential, expressed as the ratio of those quantities. Commonly recognized are two closely related notions of capacitance: self capacitance and mutual capacitance.

**(3) Inductor**:
An inductor, also called a coil, choke, or reactor, is a passive two-terminal electrical component that stores energy in a magnetic field when an electric current flows through it. An inductor typically consists of an insulated wire wound into a coil.

## 2. Electric design tools
**(1) Fusion**：
Fusion 360 is a 3D modeling and design software developed by Autodesk. It is widely used for creating 3D models of various objects, including mechanical, electrical, and computer parts. Fusion 360 allows users to create complex 3D models with ease, and it has a user-friendly interface that makes it easy to learn and use.
![电路设计工具界面截图](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20222610.png)

To download fusion, please click [here](https://www.autodesk.com.cn/products/fusion-360/personal-download). Then click Sign in for students.

![下载界面](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20223209.png)

Tab the relevant information in this step.

![输入信息](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20223236.png)

Finally, download and install it.

![准备下载](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20223927.png)

To use the Fusion for electroc design. We need to install the nessessary libraries. Firstly, crease the schematic of circuit.

![原理图](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20224518.png)

Then, click the libraries to find electric compoments.

![元器件](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20224622.png) 

After clicking the libraries, the current pages show the Electronic component library.

![1](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20224645.png)

To manage the library, click the icon in the upper right corner and choose to add the libaray form local disk.

![2](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20224708.png)



**(2) JIALICHUANG eda**：
Jialichuang EDA is a browser-based, friendly and easy to use, powerful EDA (Electronics Design Automation: Electronic Design Automation) tool. This is the main page of Jialichuang EDA.After using this platform for electronic design, you can use the mall supported by this platform to place an order directly.


![3](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-07%20225556.png)

## 3. PCB borad design
In this course, we will use JIALICHUANG EDA to design a PCB board. Firstly, add a new schematic.

![4](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20011211.png)

After that, we could add the electronic components to the schematic. The name of compoments could be found in the electronic component library.

![5](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20011412.png)

By clicking the wire tool, the compoments were connected.

![6](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20014225.png)

In the class, a simple PCB schamhematic was designed.

![7](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-20%20140602.png)

 ## 4. PCB board layout
 To finish the PCB manufacturing, we should consider the layout of the PCB to make sure every wires are connected correctly, and all the PCB components are placed in the right place. In the same time, we should consider the function and real usingg scenario of the PCB boards, and make sure the PCB size is suitable.

 Firstly, we should convert the schmatic to PCB.

 ![8](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20014847.png)

 ![9](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20015159.png)

 Then, we should arrange the place of the electric compoments and the wires of the PCB board. The wires are traces bend at 45° angles. One reason for this is that 45° angles shorten the electrical path between components compared to 90° angles. Another reason is that high speed logic signals can get reflected off the back of the angle, causing interference.

 ![10](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20015552.png)

 Larger circuits can be difficult to design on a single layer PCB. As design complexity increases, it gets harder to route the traces without intersecting one another. Luckily there are double, triple, and multi-layer PCBs that allow traces and planes to be routed on electrically isolated layers.

Double-layer PCBs have two copper layers, one on top and one on the bottom:

![11](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20015611.png)

The first layer of the PCB board are arranged as the following figure.

![12](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-20%20152328.png)

The second layer of the PCB board are arranged as the following figure.

![13](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-20%20152343.png)

Finnaly, Copper plate laying of PCB.
![14](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20020251.png)

![15](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-20%20152850.png)

Finally, export the PCB design and send it to manufacturer.

![16](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-08%20020437.png)