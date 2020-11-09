# caps
Event Driven Applications

**version:** "1.0.4"

**Author:** Lulu Sevignon

CAPS simulates a real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).

## Setup

1. Clone down this repo locally

#### In `api` folder
1. Run `npm i`
2. add an `.env` file with: `PORT=3002`

#### In `CapsServer` folder

1. Run `npm i`
2. add an `.env` file with:
    - `STORE_NAME=1-206-flowers`
    - `PORT=3000`

#### In `Vendor` folder

1. Run `npm i`
2. add an `.env` file with:
    - `STORE_NAME=1-206-flowers`

#### In `Driver` folder

1. `Run npm i`

#### Open 4 tabs in CLI

1. Turn on api server using `node api.js`
2. Turn on capsServer using `nodemon`
3. Turn on Vendor using `nodemon`
4. Turn on Driver using `nodemon`


### Users stories

- As a vendor, I want to alert the system when I have a package to be picked up

- As a driver, I want to be notified when there is a package to be delivered

- As a driver, I want to alert the system when I have picked up a package and it is in transit

- As a driver, I want to alert the system when a package has been delivered

- As a vendor, I want to be notified when my package has been delivered

#### From the Vendor (store owner) perspective
- As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery
- As a driver picks up a package, the store owner should know that the package is now “in transit”
- Once the driver delivers a package, the store owner should know that the package has been delivered

#### From the Driver’s perspective
- As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up
- Drivers need a way to scan a package and alert the vendors that the package is in transit
- Drivers need a way to scan a package and alert the vendors that the package has been delivered

#### From the perspective of our company
- Essential to this system working is that we have to operate in real time. As things happen with the packages, everyone needs to know at that moment, with a guarantee that every state change is visible even if they
- We don’t want our clients having to refresh their browser to get the latest status updates
- We also are aware that they will not always have their browser open … So, if they leave & come back, it’s imperative that they can the state of things since they last logged in.

### Technical Requirements

- Node.js
- Socket.io for realtime event management
- ES6 Classes
- ExpressJS Web Server
- In-Memory messaging queue
- Test Driven Development, using Jest



### UML
![UML Caps](./assets/UML-caps.png)