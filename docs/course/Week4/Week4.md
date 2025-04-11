# CAD
## 1. Fusion 360 Introduction
Fusion 360 is a cloud-based CAD/CAM/CAE tool for collaborative product development. Fusion 360 combines fast and easy organic modeling with precise solid modeling, allowing you to make your designs manufacturable. Last but not least,With the help of Eagle,Fusion has the function of Electromechanical.

**1. Creat sketch**

Firstly, creat a new part.

![1](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-25%20151220.png)

Choose a panel to sketch a retangle.

![2](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-25%20151512.png)

To define the sketch compeletly, some sizes are needed to ensure,such as the angle, length etc. In addition, the place of the sketch should be defined, whcih is the length between sketch and origin point.

![3](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-25%20160114.png)

**2. Creat part**

To convert the sketch into a part, we will use stretch tool to pull the sketch along a direction. The thickness is defined in this process.

![5](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-09%20175518.png)

![6](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20002532.png)

![4](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-25%20160447.png)

**3. Add more parts**

You can add more parts to the model by using the same method. In addition, you can use the copy and paste to add more parts.

![7](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-09%20175458.png)

**4. Cooperate the parts**

To assemble these parts, you can use the connection tool to make them cooperate. Choose the assemble type firtly. In the step, you can let the part rotate or attched to the another part.

![8](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20003319.png)

![9](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20003348.png)

Then, choose the connection surface or point to another part, the two parts can be connected automaticly.

![10](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20005224.png)

![11](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20010249.png)

## 2. Fusion 360 Automated modeling

Automated Modeling is a new tool in the Design Workspace that automates the process of exploring and creating new design concepts based on simple definitions of what to connect and what to avoid. You can find the Automated Modeling tour [here](https://www.autodesk.com/products/fusion-360/blog/automated-modeling-fusion-360-tutorial/#:~:text=Automated%20Modeling%20is%20a%20new%20tool%20in%20the,of%20what%20to%20connect%20and%20what%20to%20avoid.).

![12](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20010617.png)

To creat the solution,  you will need to define Faces to Connect and, optionally, Bodies to Avoid. Then the solution will be generated.

![13](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20011322.png)

You can adjust the paramters of the solution to ensure the generate effect.

![14](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20011626.png)

Then, you can use the solution to generate the model.

![15](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-10%20011818.png)

## 3. Fusion 360 Plugin practice

In this part, we will practice two plugins.

Project salvador is an Autodesk Fusion add-in that provides access to third-party Generative AI models through the APIs1. It allows users to create AI-generated images inside Fusion and automatically generate sketches2. Another add-in generates Voronoi diagrams, which can be inserted into a sketch and used for creating or modifying models3.

![16](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20162127.png)

Firstly, decribe the image you want to generate. Then, click generate the image.

![17](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20163940.png)

Choose e section plane for the image.

![18](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20164002.png)

Then click the generate sketch button.

![19](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20165027.png)

Choose the target image.

![20](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20164046.png)

After converting the image into sketch. The rough sketch was generated. However, the effect is not well here, which might be caused to the undetailed description. In addirion, too complexed image might caused the failure.

![21](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20164249.png)

Thus, I choose a current simple 2D pattern image to generate the sketch by the plugin.

![21-1](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/OIP-C.jpg)

Then i pitch on the underside plane to paste the imgae.

![21-3](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20214647.png)

![21-2](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20212414.png)

After that, I use the plugin to generate a sketch according to the image.

![21-3](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20212438.png)

Then, the sketch was generated and you can creae the part freely.

![21-4](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20212512.png)

![21-5](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20214615.png)

## 4. Parameter class design practice

Parametric modeling is an approach to 3D CAD where you reach the design intent is by altering features and constraints. This allows designers to automate repetitive changes. Parametric modeling allows for creating mathematical relationships (modeling features) between sketches and the final model. These are stacked on each other over time and thus become intertwined. In other words, modifying the parameters of one feature will affect other features.

![22](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20165926.png)

![23](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20170956.png)

After changing the parameters, the model will be changed automatically. Add more dimensional constraints can make the modle scale more coordinated.

![24](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20171339.png)


## 5. Fuison 360 design practice of universal coupling

A universal joint is a joint that connects two levers, consisting of a pair of ordinary hinges with a relative orientation of 90°, which allows the lever to be steered in any direction, and is still widely used in vehicle transmissions.

![24-1](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250412001917.png)

To creat the part, two axes perpendicular to each other are established. The diamater of the roller is 25mm.

![24-2](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20002131.png)

Strtech the roller to the vertical axes and landscape axes with 190mm.

![25](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-11%20222445.png)

Then, establish the joint section.

Sketch the shape.

![26](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20005351.png)

Stretch the sketch.

![27](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20012125.png)

Establish a plane that is tangential to the joint.

![28](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20013447.png)

Creat the instert hole.

![29](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20020401.png)

Copy the other joint.

![30](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20020607.png)

Then assemble the joint.

![31](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20021319.png)

![32](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20021248.png)

And the other joint.

![33](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20021907.png)

Finally, Start the contact collection.

![34](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20021926.png)

Creat new contact collection.

![35](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20021944.png)

Select the two parts for contacy collection.

![26](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-04-12%20022024.png)

Let's preview the effect!

![27](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/c629a5aa29d58ae056a9aa7475b56fa1.gif)

## 6. Solidworks introduction

SOLIDWORKS® 3D CAD is the choice for professionals around the world who need to take design innovation further, produce products faster, and reach the highest levels of efficiency in their day-to-day product development work. Decades of user-driven enhancements and a relentless R&D focus on user experience has made SOLIDWORKS 3D CAD not just powerful, but both easy to learn and fun to use.
 Click [here](https://www.solidworks.com/sw/support/downloads.htm) to download the solidworks. More information about solidworks can be find in https://www.solidworks.com/product/solidworks-3d-cad

![25](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/yanbing/curves-surfaces-cad-import-comsol.zh_CN.png)
