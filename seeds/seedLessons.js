const { Lesson } = require('../models');

const lessonData = [
    {
        title: 'Introduction',
        description: 'A brief overview of the course',
        category_id: 1, // pre-course info
            body1: `Hello and welcome to Chris Rowe's Introduction into Automotive Mechanics class. This class is a <strong>6 week course</strong> that is made up of <em>3 classroom sessions</em> (CRS) and <em>3 labs</em> (LAB). The classroom sessions will be approximately 1 hour and 30 minutes. Students will be guided through these lessons with the aide of this website (students takign class will also be provided a textbook of this information) as well as physical demonstrations in class. Labs will take approximately 3 hours and will take place in the carport. A lab will give the students a hands-on opportunity to perform auto maintenance with a large array of available tools and the supervision of someone who has performed many automotive repairs. Students are also encouraged to stick around for a few minutes after any classroom or lab session to ask questions.`,
        fig1: `./assets/001_intro.jpg`,
        body2: `<ul>
            <li><strong>Week 1 (CRS):<strong> We will start by learning the names and functions of tools used for automotive
            maintenance and repair. It is important to know what a tool is called when communicating in a shop with other technicians, mechanics, or friends while working on a mechanical project.</li>
            <li><strong>Week 2 (CRS):</strong> We will move on to safety and best practices. There are many bad habits that can be picked up in an auto shop or garage work environment. Some of these bad habits will make the repair take longer, some will break tools, others can cause you harm. It is very important that you take the safety course
            very seriously as reckless accidents when working on cars can cause the loss of fingers, blindness, skin burns, or even death. The labs in this course are designed to be relatively simple and safe however it is paramount that the safety lessons taught in week 2 be observed in all labs in this course.</li>
            <li><strong>Week 3 (LAB):</strong> is all about performing the most common automotive maintenance procedures. Students will learn how to perform an oil change, inspect or replace an air filter, rotate the tires. If this lab is completed efficiently and time allows, students will also learn how to change windshield wiper blades, a
            burned out headlight bulb, a cabin air filter, and to check and top off fluids.</li>
            <li><strong>Week 4 (CRS):</strong> Students will learn about the basic mechanical systems that make a car work. How does an engine turn gasoline into movement? How do the steering, suspension, and braking systems work? What wear items throughout the car need to be inspected and maintained to keep the car driving like new?</li>
            <li><strong>Week 5 (LAB):</strong> Students will learn how to service the braking system on a car. This includes removing
            old brake pads, removing the old brake rotor, installing the new parts and bleeding the system. If this repair is performed efficiently and time allows, students will get to see demonstrations of automotive systems with the car in the air as well as a few more visual inspection and diagnostic tips.</li>
            <li><strong>Week 6(LAB):</strong> Students will be given the opportunity to perform simple repairs for members of the
            community. We will have signed up a few people to bring their cars in need of a repair. The specific events of this week will vary greatly based on what response is given by the community. If reaching out to the community for repair work doesn't go well, a different lab will be constructed by the course leader.</li>
            </ul>`,
        body3:`
            If you are reading this course material but are <strong>not</strong> taking the 6 week class, I hope you enjoy the course material. Please be very careful when working on an automobile to protect both yourself and the machinery. Nothing in this material is proprietary information, so if you have any questions about any terms used, or would like supplemental information on a topic, I encourage you to use Google and continue your research. At the time of this wiring, I have had over 16 years of experience working on my personal cars as a hobby. This course has been put together as a passion project to equip others with the knowledge I have gained along the way in order to give back to my community. I am not a professional mechanic but I am extremely passionate about this hobby. Be mindful of this when taking any advice from this manual.`
    },
    {
        title: 'Tools and Hardware',
        description: 'Automotive fasteners',
        category_id: 2, // week 1
        body1: `<h3>Common Automotive Fasteners</h3>
            <h4>What is a fastener?</h4>
            <p>A <em>fastener</em> is the generic term for the components that hold 2 parts of a machine together. Fasteners include, but are not limited to:</p>
            <ul>
            <li> Nuts & Bolts </li>
            <li> Washers </li>
            <li> Screws </li>
            <li> Clips </li>
            <li> Pins </li>
            <li> Rivets </li>
            </ul>
            <p><h4>Nuts & Bolts</h4>
            Nuts and Bolts are <em>threaded</strong> fasteners. Threaded fasteners have a spiraling raised geometry around a shaft that screws into a matching negative geometry. Nuts and bolts are used to "sandwich" 2 parts together. The nut has <em>internal threads</em> and the bolt has <em>external threads</em> that <em>mesh</em> together. The <strong>thread count</strong> (TPI or threads per inch) and pitch (angle of the threads) must match on the nut and the bolt for them to be used together. You will most likely match nuts and bolts with a ”guess and test” method rather than knowing the pitch numerically.`,
        fig1: `./assets/002_NutsBolts.png`,
        fig_caption1: `Bolt specifications are given as thread count and thread pitch. Nuts and bolts are designed to work together.`,
        body2: `<h4><strong>Washers</h4>
            <p> A washer is used to spread the clamping load of a fastener to a larger surface area than just the head of the fastener. Sometimes used to prevent the fastener from tearing through the part under stress, or some times to protect the part from scratching or finnish damage. Some washers even prevent the fasteners from backing out, or are used to take “slop” out of 2 loosely fitting parts.<p>
            <h4>Screws</h4>
            <p>A screw is much like a bolt however the screw is not held captive by a nut. A screw can use coarse threads (sometimes tapered) to directly dig into the material it is being driven into. A screw may also have finer threads (machine threads) in the same fashion that a bolt does however it will be driven into threads cast or cut directly in the part it is screwing into rather than into a nut. A bolt is technically a screw if it is being used this way (without an accompanying nut).</p>
            <h4>Clips</h4>
            <p>A clip is a fastener that is installed by being temporarily deformed slightly, put into place, and then held in place by the clip trying to return to its original shape. Clips can be single use fasteners or reusable fasteners. Common clips used in automotive applications are: c-clips e-clips, push clips, and snap rings.</p>
            <h4>Pins</h4>
            <p>A pin, in an automotive application is a straight section of metal inserted through aligning holes on 2 separate parts to prevent movement perpendicular to the shaft of the pin. These are usually used in places where a part is expected to be moved or removed often for service or adjustments. Single pin installations often facilitate or allow rotation about the pin, but it is not necessarily always true.</p>
            <h4>Rivets</h4>
            <p>There are 2 main types of rivets. Metal rivets and plastic rivets. Metal rivets are single use fasteners that are used to join 2 thin-wall materials together permanently. Metal rivets must be
            removed with a drill or chisel and are not meant to be easy to remove. Plastic rivets are used to join thin walled materials in the same way but are often reusable. They are commonly used to hold together plastic sheeting under the car and in the fenders, plastic bumpers and body panels, interior panels, carpeting etc.</p>`,
        fig2: `./assets/003_PinsRivets.png`
    }

]