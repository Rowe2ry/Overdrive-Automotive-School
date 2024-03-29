const { Lesson } = require('../models');

const lessonData = [
    {
        title: 'Introduction',
        description: 'A brief overview of the course',
        cat_id: 1, // pre-course info
            body1: `<p>Hello and welcome to Chris Rowe's Introduction into Automotive Mechanics class. This class is a <strong>6 week course</strong> that is made up of <em>3 classroom sessions</em> (CRS) and <em>3 labs</em> (LAB). The classroom sessions will be approximately 1 hour and 30 minutes. Students will be guided through these lessons with the aid of this website (students taking class will also be provided a textbook of this information) as well as physical demonstrations in class. Each section has an accompanying <strong class=highlight>5 question multiple choice quiz</strong> that <strong>must</strong> be passed with a <strong> 4 out of 5 or higher</strong> score in order to access the next lesson. Labs will take approximately 3 hours and will take place in the carport. A lab will give the students a hands-on opportunity to perform auto maintenance with a large array of available tools and the supervision of someone who has performed many automotive repairs. Students are also encouraged to stick around for a few minutes after any classroom or lab session to ask questions.</p>`,
        fig1: `001_intro.jpg`,
        fig_caption1: 'This is the look of success you will become familiar with if you make working on cars a hobby of yours.',
        body2: `<ul>
            <li><strong>Week 1 (CRS):</strong> We will start by learning the names and functions of tools used for automotive
            maintenance and repair. It is important to know what a tool is called when communicating in a shop with other technicians, mechanics, or friends while working on a mechanical project.</li>
            <li><strong>Week 2 (CRS):</strong> We will move on to safety and best practices. There are many bad habits that can be picked up in an auto shop or garage work environment. Some of these bad habits will make the repair take longer, some will break tools, others can cause you harm. It is very important that you take the safety course
            very seriously as reckless accidents when working on cars can cause the loss of fingers, blindness, skin burns, or even death. The labs in this course are designed to be relatively simple and safe however it is paramount that the safety lessons taught in week 2 be observed in all labs in this course.</li>
            <li><strong>Week 3 (LAB):</strong> is all about performing the most common automotive maintenance procedures. Students will learn how to perform an oil change, inspect or replace an air filter, rotate the tires. If this lab is completed efficiently and time allows, students will also learn how to change windshield wiper blades, a burned out headlight bulb, a cabin air filter, and to check and top off fluids. <strong>NOTE: Students will <span class="highlight">NOT</span> be allowed to participate if they have not completed the safety section of this course, or if they show up on LAB day without the appropriate attire.</strong></li>
            <li><strong>Week 4 (CRS):</strong> Students will learn about the basic mechanical systems that make a car work. How does an engine turn gasoline into movement? How do the steering, suspension, and braking systems work? What wear items throughout the car need to be inspected and maintained to keep the car driving like new?</li>
            <li><strong>Week 5 (LAB):</strong> Students will learn how to service the braking system on a car. This includes removing
            old brake pads, removing the old brake rotor, installing the new parts and bleeding the system. If this repair is performed efficiently and time allows, students will get to see demonstrations of automotive systems with the car in the air as well as a few more visual inspection and diagnostic tips.</li>
            <li><strong>Week 6 (LAB):</strong> Students will be given the opportunity to perform simple repairs for members of the
            community. We will have signed up a few people to bring their cars in need of a repair. The specific events of this week will vary greatly based on what response is given by the community. If reaching out to the community for repair work doesn't go well, a different lab will be constructed by the course leader.</li>
            </ul>`,
        body3:`
            <p>If you are reading this course material but are <strong>not</strong> taking the 6 week class, I hope you enjoy the course material. Please be very careful when working on an automobile to protect both yourself and the machinery. Nothing in this material is proprietary information, so if you have any questions about any terms used, or would like supplemental information on a topic, I encourage you to use Google and continue your research. At the time of this wiring, I have had over 16 years of experience working on my personal cars as a hobby. This course has been put together as a passion project to equip others with the knowledge I have gained along the way in order to give back to my community. I am not a professional mechanic but I am extremely passionate about this hobby. Be mindful of this when taking any advice from this manual.</p>`,
        access_code: 'new'
    },
    {
        title: 'Tools and Hardware',
        description: 'Automotive fasteners',
        cat_id: 2, // week 1
        body1: `<h4>What is a fastener?</h4>
            <p>A <em>fastener</em> is the generic term for the components that hold 2 or more parts of a machine together. Fasteners include, but are not limited to:</p>
            <ul>
            <li> Nuts & Bolts </li>
            <li> Washers </li>
            <li> Screws </li>
            <li> Clips </li>
            <li> Pins </li>
            <li> Rivets </li>
            </ul>
            <h4>Nuts & Bolts</h4>
            <p>Nuts and Bolts are <em>threaded</em> fasteners. Threaded fasteners have a spiraling raised geometry around a shaft that screws into a matching negative geometry. Nuts and bolts are used to "sandwich" 2 parts together. The nut has <em>internal threads</em> and the bolt has <em>external threads</em> that <em>mesh</em> together. The <strong class="highlight">thread count</strong> (TPI or threads per inch) and <strong class="highlight">pitch</strong> (angle of the threads) must match on the nut and the bolt for them to be used together. You will most likely match nuts and bolts with a ”guess and test” method rather than knowing the pitch numerically.</p>`,
        fig1: `002_NutsBolts.png`,
        fig_caption1: `Bolt specifications are given as thread count and thread pitch as well as drive size and length. Nuts and bolts are designed to work together.`,
        body2: `<h4>Washers</h4>
            <p> A washer is used to spread the clamping load of a fastener to a larger surface area than just the head of the fastener. Sometimes used to prevent the fastener from tearing through the part under stress, or some times to protect the part from scratching or finnish damage. Some washers even prevent the fasteners from backing out, or are used to take “slop” out of 2 loosely fitting parts.<p>
            <h4>Screws</h4>
            <p>A screw is much like a bolt however the screw is not held captive by a nut. A screw can use coarse threads (sometimes tapered) to directly dig into the material it is being driven into. A screw may also have finer threads (machine threads) in the same fashion that a bolt does however it will be driven into threads cast or cut directly in the part it is screwing into rather than into a nut. A bolt is technically a screw if it is being used this way (without an accompanying nut).</p>
            <h4>Clips</h4>
            <p>A clip is a fastener that is installed by being temporarily deformed slightly, put into place, and then held in place by the clip trying to return to its original shape. Clips can be single use fasteners or reusable fasteners. Common clips used in automotive applications are: c-clips e-clips, push clips, and snap rings.</p>
            <h4>Pins</h4>
            <p>A pin, in an automotive application is a straight section of metal inserted through aligning holes on 2 separate parts to prevent movement perpendicular to the shaft of the pin. These are usually used in places where a part is expected to be moved or removed often for service or adjustments. Single pin installations often facilitate or allow rotation about the pin, but it is not necessarily always true.</p>
            <h4>Rivets</h4>
            <p>There are 2 main types of rivets. Metal rivets and plastic rivets. Metal rivets are single use fasteners that are used to join 2 thin-wall materials together semi-permanently. Metal rivets must be installed with a special tool (called a rivet gun) and removed with a drill or chisel and are not meant to be easy to remove, but an advantage is that they allow for flush surfaces, they are light weight, and they are very strong. Metal rives are incredibly popular in the aerospace industry.. Plastic rivets are used to join thin walled materials in the same way but are often reusable. They are commonly used to hold together plastic sheeting under the car and in the fenders, plastic bumpers and body panels, interior panels, carpeting etc.</p>`,
        fig2: `003_PinsRivets.png`,
        fig_caption2: 'An example of a c-clip and of a plastic push rivet.',
        body3: `<h4>Lug Nuts</h4>
            <p>A lug nut is a specific type of nut used to hold the wheels onto a car. They get a special mention because they will be encountered very regularly for various forms of automotive maintenance. Lug nuts can be open-ended, closed-ended, security driven, tapered seat, square shouldered, spline drive, or have various other distinguishing characteristics. The most important aspects of working with lug nuts are to use the correct size/type of driving tool (more on types of drive on the next page), and to observe what is called a <strong class="highlight">torquing sequence</strong>. A torquing sequence is just the order in which fasteners should be tightened down or loosened up, usually in stages. This is done to prevent uneven forces that may warp the part. Alloy wheels and lug nuts are usually the first applications in which you will need to observe a torquing sequence, but it will be a lot more common to use them when doing engine work when you are more experienced later on.</p>`,
        fig3:`004_LugNuts.png`,
        fig_caption_3: 'Examples of 4 and 5 lug nut torquing sequences.',
        body4: `<p><strong>Tech Tip:</strong></p>
            <p>A torque sequence should be observed in <em> stages</em>. For example, a 3-stage 5-lug wheel torque sequence set to 100ft. lbs of torque (more information about torque later in this course) would go as follows.
            <ul>
            <li>Set torque wrench to 50 ft. lbs. and tighten lug nuts in the torquing sequences order (1,2,3,4,5).</li>
            <li>Increase the setting on the torque wrench from 50 to 75 ft. lbs and repeat the sequence.</li>
            <li>Increase wrench setting to the full 100 ft. lbs. and repeat the sequences again. It is customeary to check the first sequence faster one last time at the end. (Example: 1,2,3,4,5,1)</li>`,
        access_code: 'VV-_W1L1_-VV'
    },
    {
        title: 'Common Drive Types',
        description: 'Drive types for bolts and screws',
        cat_id: 2, // week 1
        body1:`<h4>Driving Fasteners</h4>
            <p>When engaging/mating threaded parts, the action of rotating the threaded fastener into place is referred to as <em>driving</em> the fastener. This is how tools like the Screwdriver and impact driver got their names. Another much less common name for wrenches would be bolt or nut drivers. Threaded fasteners are by far the most common fastener type used in the auto industry so this lesson is all about using them.</p>
            <h4>Hex Drive</h4>
            <p>By far the most common drive type for a fastener in automotive applications. The head of the fastener is hexagonal in shape. The <strong class="highlight">size</strong> of a hex head is determined by the distance between 2 parallel sides. Female hex heads are driven by tools commonly referred to as “Allen” wrenches or “Allen” keys.</p>`,
        fig1: `005_HexDrive.png`,
        fig_caption1: `Size of a hex fastener is determined by the distance between 2 parallel sides. Hex drive types can be male(externally driven) or female (internally driven). Nuts are <em>not</em> always hex drive fasteners.`,
        body2:`<h4>Slotted</h4>
            <p>Commonly referred to as “flathead”. This is the cheapest drive type to manufacture, but it has several drawbacks. The most significant drawback is that it does not capture and self-center the head of the driver so it can be easy for the tool to “slip out” of the screw head. Some advantages are that it does not “cam out” easily and you can sometimes pull a penny or dime out of your car and tighten/loosen this type of fastener in a pinch on the side of the road. The size is measured by the length and width of the slot, however most people just have a variety of longer and shorter flathead screwdrivers in a “big” and “small” size in their toolbox. If their big one doesn't fit, they use their smaller one. Nobody really measures the slot in the screw.</p>
            <h4>Philips</h4>
            <p>This is becoming the most popular head type for screws as it does self-center the driver head. Phillips head screws are recognized by their plus (+) shape and are measured in 5 sizes ( from smallest to largest: #0, #1, #2, #3, & #4 | not including jeweler sizes) The main downside of this drive type is that it strips fairly easily if mis-handled and it can have problems with “camming out” This is hard to describe in text but can be demonstrated in a classroom setting.</p>
            <h4>Square</h4>
            <p>Sometimes referred to as a “Robinson drive” these are not very common. When driving a square drive fastener (male or female) this design is <em>extremely</em> resistant to stripping out. Size is the distance of 1 side of the square. If you encounter a square drive male or female, you can most likely use the a socket wrench drive square to drive female fasteners of square type, or an open ended wrench for male square drive type.</p>
            <h4>Torx</h4>
            <p>Becoming slightly more common but still a somewhat rare drive type. If the correct size Torx bit is being used, this design is good at resisting stripping out, and can actually drive with a very high amount of torque. One downside is that you can incorrectly drive this with a size too small, and then VERY easily strip the fastener. The size is referenced from T1 to T100 (smallest to biggest). Auto manufacturers will often use a Torx head on a part that they do not want you, the end user, servicing since they know you are less likely to have the correct size Torx socket or Torx driver bit. When attempting to service something with Torx head fasteners, take care to do adequate research on the repair and use caution when servicing. Eruopean luxury manufacturers commonly use torx fasteners to dissuade D.I.Y. home mechanics from servicing the car.</p>`,
        fig2: `006_Drivetypes.png`,
        fig_caption2: 'A detailed view of the common drive types. L to R, hex, slotted, Phillips, square(Robinson), Torx.',
        access_code: 'VV-_W1L2_-VV'
    },
    {
        title: 'Wrenches (Part 1)',
        description: 'Basic Wrenches',
        cat_id: 2, // week 1
        body1: `<h4>Wrenches</h4>
            <p>Wrenches are tools used for driving threaded fasteners with a high amount of torque (or rotational force) using leverage. There are many kinds of wrenches with a large variety of common wrenches and hundreds of specialized wrenches for specific applications. Understanding which type of wrench will best suit your situation will go a <strong class="highlight">long way</strong> towards making your mechanic work go as smoothly as possible and familiarization with these tools will come with practice. This is so important, we are going to review wrenches in 2 sections.</p>
            <h4>Open ended</h4>
            <p>The simplest type of wrench is an Open Ended Wrench. Sometimes called a crescent wrench, This type of wrench has 2 parallel jaws that span a distance equal to the wrench's size. The size of the wrench will be stamped or printed on the handle near the working head of the wrench. Open ended wrenches can be used to drive hex and square heads.</p>`,
        fig1:`007_OpenEndedWrench.png`,
        fig_caption1: `I've never seen a double ended open wrench like this, but this has been done in this image to ensure there is no confusion about what an open ended or crescent wrench looks like.`,
        body2: `<h4>Box Ended</h4>
            <p>This type of wrench has a closed shape for engaging the fastener head. This can be helpful for use in places where an open ended wrench keeps slipping off of the head of the fastener that one is trying to drive. There are 6-point box end wrenches and 12-point box end wrenches. (more info on 6-point vs. 12-point later on)</p>`,
        fig2:`008_BoxEndedWrench.png`,
        fig_caption2: 'An example of a double ended box ended wrench. Usually if you have one of these in your toolset, the 2 ends will have a different size. (Ex 10mm & 12mm)',
        body3: `<h4>Combination</h4>
            <p>The most popular basic wrench you will find in any store-bought “mechanic's tool set”. The Combination Wrench (or Combo Wrench) has both a box end on one side <em>and</em> an open end on the other. The tool sets you buy will usually have 12-points on the box side of the combo wrenches.</p>`,
        fig3: `009_CombinationWrench.png`,
        fig_caption3: 'You will see and use this type of wrench all the time. Between this and the socket wrench (discussed in the next section), all other tool use will probably only 5-10% of the time and this will be the remaining 90-95%.',
        access_code: 'VV-_W1L3_-VV'
    },
    {
        title: 'Wrenches (Part 2)',
        description: 'Advanced Wrenches',
        cat_id: 2, // week 1
        body1: `<h4>Socket Wrenches</h4>
            <p>This is the most commonly used tool in any garage in the world. 99% of the time, for hand tool use, a mechanic will be using a ratcheting socket wrench if it can fit in the tight space where they need to work. The advantages of this type of wrench are many. The ratcheting action allows for driving fasteners with a very short tool "swing". The tool can be used with numerous accessories to engage the fastener. This type of wrench is actually used as 2 pieces. The driver and the sockets. The driver (sometimes called a “ratchet” if it is a ratcheting driver) comes in various sizes and uses a square drive to engage the sockets. Sockets will be discussed in greater detail further in the next lesson. That section will also into depth about all of the adaptors and socket types we can use to utilize this tool to work for us. There are 3 socket wrench drive sizes that are the most common. 1/4", 3/8", & 1/2" Recall square drives are sized based on the length of one side of the square.</p>`,
        fig1: `010_SocketWrench.png`,
        fig_caption1: 'Here we see how a socket wrench (ratcheting driver) is used in conjunction with a socket.',
        body2: `<h4>Adjustable Wrenches</h4>
            <p>Adjustable wrenches, sometimes called Monkey wrenches, are wrenches that have movable jaws that can be adjusted by manipulating a thumb-driven worm screw. These are great because they have an infinite number of sizes within a set range. They are however very bulky and hard to fit into tight space. The adjustment will sometimes "wander" around and drift away from the size you would like to use. It is recommended to put a small adjustable wrench somewhere in your car so that, in the event of a breakdown, you have a versatile tool you can use to possibly perform a roadside repair. Adjustable wrenches will also help if you are missing the correct size wrench to drive a fastener that is an uncommon size. Lastly, these can also be used a small weak clamp for holding 2 things together while setting an adhesive.</p>`,
        fig2: `011_AdjustableWrench.png`,
        fig_caption2: 'Here you can see how turning the worm screw opens and closes the jaws of the tool.',
        body3: `<h4>Flare Wrenches</h4>
            <p>Flare wrenches, sometimes called line wrenches, are specialty wrenches that are used for disconnecting line fittings. They look like 6-point box end wrenches that have a slot cut in them. They are technically open ended but they have drive engaging faces on all 6 sides of the hex fastener rather than a set of parallel jaws like a conventional open ended wrench. Since brake and hydraulic lines usually have aluminum fasteners (soft metal), these wrenches are preferred to prevent rounding of those types of fasteners.</p>`,
        fig3: `012_FlareWrench.png`,
        fig_caption3: 'A flare wrench may look like a funny open ended wrench. If you are doing hydraulic line service (clutch, or brake fluid lines), it is <em>HIGHLY RECOMMENDED</em> that you use one of these over an open ended wrench.',
        body4: `<h4>Torque Wrenches</h4>
            <p>Torque wrenches are specialized wrenches that have an adjustable scale on them to measure the torque being applied on the drive. Some torque wrenches heave a digital or analogue read-out of the torque that is being applied in real-time. Other common designs can be adjusted to produce and audible -click- when a certain torque is met/exceeded. The engineers that designed the car have specified a torque value for each fastener. These torque specifications can be referenced on-line or from a FSM (factory service manual) for a specific vehicle. Following torque specifications will prevent fasteners from backing out, parts from warping, and fasteners from breaking or stripping out. A torque wrench cannot always be used if there are issues with tool clearance, but using one wherever you can will give you a sense of what various torque values feel like. You will also generally learn from experience how much force you should be applying to fasteners that thread into plastic vs aluminum vs steel. How much force to apply on smaller fasteners vs. bigger ones etc.</p>`,
        fig4: `013_OneFootPound.png`,
        fig_caption4: 'One foot pound of torque explained.',
        access_code: 'VV-_W1L4_-VV'
    },
    {
        // seed in Sockets pt 1 lesson (page 10 of PDF) | category 2-week 1
        title: 'Sockets',
        description: 'Sockets Part 1',
        cat_id: 2, // week 1
        body1: `<h4>Hex Sockets</h4>
            <p>The real hero of the shop is the socket wrench, and without the end pieces used to do the driving, <strong class=highlight>Sockets</strong> socket wrenches wouldn't do any good. Because cars and engine bays have such crowded and complex layouts, many different types and shapes of sockets have been developed along with many wonderful adapters to aid in gaininag access to the drive heads of nuts and bolts.</p>
            <h4>12 Point sockets vs 6 Point</h4>
            <p>To aid in quick and easy repair work, tool manufacturers designed the <strong class=highlight>12 point socket</strong>. This socket is named for the 12 point star geometry that one sees when looking at the drive faces from above. The advantage of this type of socket is that it can engage with a hex nut or bolt head in 12 different positions within 360° of rotation. This means that a mechanic does not have to work as hard to line up the socket drive faces to that of the fastener drive faces. It does however, come at a cost. This is where <strong class=highlight">6 point sockets</strong> come in. The 6 sided shape is exactly the same as the nut or bolt that it drives. The 6 point socket is making full contact face-to-face with the fastener and is spreading the stress out across more metal. this makes a 6 point socket <em>much less likely</em> to round out the corners of the fastener. If a hex fastener is made into a round fastener, it is <strong>significantly</strong> harder to remove or install. See the image below for a visual representation of this phenomenon.</p>`,
        fig1: `014_12pointVs6point.png`,
        fig_caption1: 'A visual representation of 12 vs 6 point hex drives',
        body2: `<h4>Other Distinguishing features in Sockets</h4>
            <p>Sockets can vary in more ways than just how many points they have. The list below is in no way exhaustive, that is to say, that there are many more variations than what are listed. But they can give you an idea. Its also good to note that sockets can share two or more of these features. One day, you'll need to ask your buddy to hand you a "12 point, thin walled, deep well socket", and you'll be happy you know how to ask for it.</p>
            <ul>
            <li><strong>Shallow Sockets</strong> low profile sockets for fitting in tight spaces (depth)</li>
            <li><strong>Thin Wall</strong> Sockets with a very thin metal thickness between the outside edge and the drive faces. These sockets will give more radial clearance but are more fragile to cracking under stress.</li>
            <li><strong>Deep Well</strong> long sockets used to drive a nut that has a long threaded bolt section protruding from it.</li>
            <li><strong>Imact-Grade Sockets</strong> identified by their black color, these sockets are hardened and usually feature beefier wall thickness, these sockets have a manufacturer claim that they are designed to withstand the extremely brutal forces of being driven with an impact wrench.</li>
            </ul>`,
        fig2: `015_SocketFeatures.png`,
        fig_caption2: 'Sockets come in many variations. Learn to describe the distinguishing characteristics you need.',
        access_code: 'VV-_W1L5_-VV'
    },
    {
        // seed in Sockets pt 2 lesson (page 11 of PDF) | category 2-week 1
        title: 'Sockets (cont.)',
        description: 'Part 2: Accessories',
        cat_id: 2, // week 1
        body1: `<h4>Drive Adapters</h4>
            <p>These are adapters that allow sockets of a different drive size to be installed onto an otherwise non-compatible socket wrench. These can be handy if you have a 1/4" drive thin wall socket that you would like to use at the end of a 3/8" drive extension. Or to drive a very large socket that has a 1/2" drive with a 1/4" drive socket wrench due to not having room for a larger handled socket wrench.</p>`,
        fig1: `016_SocketDriveAdapters.png`,
        fig_caption1: 'The drive adapters adapt from one size square drive to another.',
        body2: `<h4>Extensions</h4>
            <p>Extensions are useful metal shafts with a female square drive on one end and a male square drive on the other. They come in many different sizes and lengths to get the perfect fit. These are used to drive sockets in areas too cramped to put the socket wrench into place. Extensions come in all sorts of drive sizes and lengths.</p>`,
        fig2: `017-SocketExtensions.png`,
        fig_caption2: 'Extensions can move your socket further down into the engine bay so that the tool can swing around farther away from the fastener in open space.',
        body3: `<h4>Swivels</h4>
            <p>Swivels are components that mount between the socket and the socket wrench (as are the other 2 items on this page) however a swivel will allow the socket to be driven at an angle other than perpendicular(the only option without swivels). Swivels are often incredibly useful in allowing a socket to be driven around an object on the car that would otherwise have to be removed in order to gain access to drive the fastener.</p>`,
        fig3: `018_Swivels.png`,
        fig_caption3: 'A swivel gives you the ability to angle the tool and its extensions “off-axis” of the fastener to clear obstacles.',
        access_code: 'VV-_W1L6_-VV'
    },
    {
        // TODO: seed inPliers and other lesson (pages 12 & 13 of PDF) | category 2-week 1
        title: 'Pliers',
        description: 'Types of Pliers',
        cat_id: 2, // week 1
        body1: `<h4>What are pliers?</h4>
            <p>Pliers are tools with 2 handles that are squeezed together to clamp a pair of jaws around a fastener or work piece. Pliers have a way of coming in handy in most repairs in one way or another.</p>
            <h4>Square Nose</h4>
            <p>These are just the standard common shape of a basic pair of pliers. The jaws are almost always textured on the working side of the jaws to aid in gripping.</p>
            <h4>Needle Nose</h4>
            <p>These pliers have a thin tapering pair of jaws used to get into tight places. As the name implies, these thin jaws are pointy like a needle. This allows them to fit into tight spaces to grab onto smaller objects.</p>`,
        fig1: `020_Pliers.png`,
        fig_caption1: 'You can see that the square jaw pliers are stronger, and the more delicate needle nose jaws are much smaller. As is usual in the case of tools, the beefier a tool is, the more robust it is at the cost of being too bulky to fit into tight spaces.',
        body2: `<h4>Locking Pliers</h4>
            <p>Sometimes referred to as “vice-grips”, these pliers can be clamped onto a piece and then locked into place to continue holding the part even when the mechanic removes his or her hand from the pliers. These are incredibly useful for holding on tight keeping the work piece still while you do what you need to do to the work piece.</p>
            <h4>Reverse Pliers</h4>
            <p>Very uncommon and not often used, these kinds of pliers actually move the jaws apart rather than together when the handles are squeezed. They can be used to spread something open, or to grab an inner section of a part for removal. While they are not common to see or use, in some situations they are seemingly the only tool that will get the job done.</p>
            <h4>Snap Ring Pliers</h4>
            <p>A specialized type of plier used to remove or install snap rings. These types of fasteners are used commonly in automotive applications where part retention inside of a bore, or on a pin are required with very low profile fastener interference. Without snap ring pliers, removing or installing snap rings is a seemingly impossible task. There are 2 kinds of snap rings and 2 kinds of snap ring pliers. Internal snap rings are squeezed together by internal snap ring pliers for removal or installation. External snap rings, and spread apart by external snap ring pliers that open when the handles are squeezed together.</p>`,
        fig2: `019_SnapRingPliers.png`,
        fig_caption2: 'Here we can see an example of internal snap ring pliers as they would be used to squeeze the open ends of an internal snap ring together.',
        body3: `<h4>Snips</h4>
            <p>Similar to a pair of scissors, snips have hardened and tapered blades instead of textured jaws for cutting wires, zip-ties, or other thinner items that will put up more of a fight than paper. These are particularly useful for cutting through thick steel cables.</p>
            <h4>Tin snips/Metal shears</h4>
            <p>Again similar to a pair of scissors but incredibly heavy duty, these are used to cut through sheet metals.</p>`,
        body4:`<div class="small-divider"></div>
            <h3>Other Automotive Tools</h3>
            <p>Here is just a small list of a few other kinds of tools you may want to use or need in an automotive workshop.</p>
            <h4>Impact Driver /Impact Gun</h4>
            <p>A power tool using pneumatic (air pressure) or electric energy to drive fasteners at a great speed. This type of driver will also use an impact force generated by small built in hammers to apply a large impact torque on fasteners that would otherwise be very difficult to generate using a hand tool.</p>
            <h4>Impact Screwdriver</h4>
            <p>A special screwdriver that twists when hit with a hammer to only apply rotational force (torque) onto a fastener while also being pushed into the drive head of a fastener. This tool isn't used very commonly, but is sometimes the only tool that will do when removing a rusted and seized Phillips head screw.</p>
            <h4>Dead-blow Hammer</h4>
            <p>A large rubber mallet filled with sand that takes advantage of physics to apply a longer duration of driving force when using a hammer.</p>
            <h4>Claw hammer and Punch</h4>
            <p>A claw hammer, sometimes called a carpenter's hammer, can be used to drive a chisel or punch. A punch is used to transmit a large impact force into a very small area such as into a seized pin that is otherwise impossible to remove.</p>
            <h4>Pry bars and Picks</h4>
            <p>Hand held tools used to pry objects apart or pick away at rubber seals.</p>
            <h4>Funnels</h4>
            <p>A tapered pyramid designed to make it easier to pour liquids without spilling.</p>
            <h4>Scan Gauge</h4>
            <p>A computerized scanner that can read error codes from a car's built-in ECU (Engine control Unit) or ECM (Engine control Module) for diagnostics.</p>
            <div class="small-divider"></div>
            <h3>Specialty Tools</h3>
            <div class="small-divider"></div>
            <h4>Hand-powered Vacuum Pump</h4>
            <p>A hand pump that will generate a vacuum to help empty a fluid reservoir or aid in bleeding air out of a hydraulic system.</p>
            <h4>Caliper Spreaders</h4>
            <p>A specialty tool whose sole purpose is to spread a brake caliper open to make room for new brake pads.</p>`,
        access_code: 'VV-_W1L7_-VV'
    },
    {
        // TODO: seed inIntro to Safety & Best Practices lesson (not in PDF) | category 3-week 2
        title: 'Safety',
        description: 'Must-Have Safety Equipment',
        cat_id: 3, // week 2
        body1: `<h4>Safety Googles</h4>
            <p>This is always going to be the first piece of safety equipment that I recommend because they are so cheap to buy and incredibly easy to use. Dirt and grime will fall from the bottom of the car while you are working on the car from below. Parts can fail catastrophically with small pieces of sharp metal flying around. Just about any fluid, grease, or chemical in your car is going to cause harm to your eyes, mouth, or even skin. You only have one set of eyes and if you mess them up, you lose one of the best parts of being alive. Not only will you never be able to appreciate a beautiful sunset anymore, you won't be able to drive, walk without a cane, watch a movie, or play any kind of sport. Seriously protect your eyes.</p>
            <h4>Mechanic Gloves</h4>
            <p>Having both a pair of insulated reusable gloves as well as a pack of a few hundred Latex or Nitrile (rubber) gloves is a good idea to protect your hands from sharp metal, hot engine and brake parts, caustic fluids, and just getting really really dirty hands. It is recommended to wear gloves any time they are not making the job more difficult. Sometimes you have to use your bare hands to feel for a very small nut or bolt in an area you can't see, and sometimes the glove causes more harm than good by snagging on parts of the car, or worse making your hand too bulky to fit where you need it to be. However, in situations where that is not the case, gloves will go a long way to protect the skin on your hands.</p>
            <h4>Hearing Protection</h4>
            <p>Occasionally, an automotive service or repair will require using noisy power tools or require you to repeatedly hit metal parts with a hammer. Either of these scenarios for extended periods of time can leave your ears ringing, and if you've noticed this phenomenon, it means you have been causing permanent damage to your hearing. These situations are best to avoid all together with a set of cheap disposable foam ear bud inserts, or a more robust set of earmuffs.</p>
            <h4>Jack Stands</h4>
            <p>Without a set of these, you are simply NOT equipped to do any job that requires lifting up the car. A jack is used to lift a car, but it should <strong class="highlight">NEVER</strong> under <strong class="highlight">ANY CIRCUMSTANCES</strong>, be used to hold a car up for any service or repair. A compact roadside jack is just meant to change a tire by the side of the road, and if you have to use one of those, do not put any part of your body under any part of the car while it is sitting on a jack. People have lost arms, legs, developed breathing problems from collapsed ribs, and on many occasions died. I have seen with my own eyes, a $150 hydraulic jack catastrophically fail while lifting my car with it. The car came crashing to the ground, but I am fine only because I was not trying to work on the car while it was supported by the jack. ALWAYS use jack stands to do anything under a car, failing to observe this safety precaution will immediately get you kicked out of the class.</p>`,
        fig1: `021_Safety.png`,
        fig_caption1: 'Jack Stands and Safety Googles aren\'t just good ideas, they\'re a <strong><em>MUST</em><//strong>,',
        access_code: 'VV-_W1L8_-VV'
    }, /*
    {
        // TODO: seed in Must Have safety lesson (page 15 of PDF) | category 3-week 2
        title: '',
        description: '',
        cat_id: 3, // week 2
        body1: `<h4></h4>
            <p></p>`,
        fig1: ``,
        fig_caption1: '',
        body2: `<h4></h4>
            <p></p>`,
        fig2: ``,
        fig_caption2: '',
        body3: `<h4></h4>
            <p></p>`,
        fig3: ``,
        fig_caption3: '',
        body4: `<h4></h4>
            <p></p>`,
        fig4: ``,
        fig_caption4: '',
        access_code: 'VV-_W1L9_-VV'
    },
    {
        // TODO: seed in Best Pract: Research lesson (page 16 of PDF) | category 3-week 2
        title: '',
        description: '',
        cat_id: 3, // week 2
        body1: `<h4></h4>
            <p></p>`,
        fig1: ``,
        fig_caption1: '',
        body2: `<h4></h4>
            <p></p>`,
        fig2: ``,
        fig_caption2: '',
        body3: `<h4></h4>
            <p></p>`,
        fig3: ``,
        fig_caption3: '',
        body4: `<h4></h4>
            <p></p>`,
        fig4: ``,
        fig_caption4: '',
        access_code: 'VV-_W1L10_-VV'
    },
    {
        // TODO: seed in Best Pract: Prep lesson (page 17 of PDF) | category 3-week 2
        title: '',
        description: '',
        cat_id: 3, // week 2
        body1: `<h4></h4>
            <p></p>`,
        fig1: ``,
        fig_caption1: '',
        body2: `<h4></h4>
            <p></p>`,
        fig2: ``,
        fig_caption2: '',
        body3: `<h4></h4>
            <p></p>`,
        fig3: ``,
        fig_caption3: '',
        body4: `<h4></h4>
            <p></p>`,
        fig4: ``,
        fig_caption4: '',
        access_code: 'VV-_W1L11_-VV'
    },
    {
        // TODO: seed in Best Pract: Minimize Injury lesson (page 18 of PDF) | category 3-week 2
        title: '',
        description: '',
        cat_id: 3, // week 2
        body1: `<h4></h4>
            <p></p>`,
        fig1: ``,
        fig_caption1: '',
        body2: `<h4></h4>
            <p></p>`,
        fig2: ``,
        fig_caption2: '',
        body3: `<h4></h4>
            <p></p>`,
        fig3: ``,
        fig_caption3: '',
        body4: `<h4></h4>
            <p></p>`,
        fig4: ``,
        fig_caption4: '',
        access_code: 'VV-_W1L13_-VV'
    }  */
];

const seedLessons = () => Lesson.bulkCreate(lessonData);

module.exports = seedLessons;