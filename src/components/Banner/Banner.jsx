import React from 'react';

import './Banner.scss';

const banner = () => (
  <div className="banner">
    <h1>Why Choose Us</h1>
    <p>
        When it comes to traveling, most of us want to get to our destination as hassle-free and quickly as possible.
        Often times our destination dictates what mode of transportation we use. But nevertheless most people will
        drive. It’s cheap, easy and the best option for most of the trips.
    </p>
    <p>
        What do you get, when you choose
      {' '}
      <b>TRIPF</b>
???
    </p>
    <ul>
      <li>
            Cost – Typically speaking traveling by car is the cheapest way to travel, especially if you have a vehicle
            that is relatively decent on gas. Trips that are within the 5-6 hour range are usually much less expensive
            when taken by car. These savings in relation to flying or train are compounded when you consider families
            with 3 or more individuals.
      </li>
      <li>
            Space – When you take your car on a trip, you can bring many things with you that you might not be able to
            if traveling by air or rail. Space is still limited, but nearly as much.
      </li>
      <li>
            Kids – No need to worry about your kids bothering any other passengers like when you are on a plane or
            train. You can also travel at your own leisure; many parents travel during the night when their children
            are asleep to make the experience easier on everyone.
      </li>
      <li>
            Pets – As with kids, coordinating travel with pets can be difficult. Kids can stay with adults on planes
            and trains, whereas many times pets cannot. They need to be underneath the plane with luggage, and can
            become scared and sick. Traveling by car is easiest when a pet is taken along.
      </li>
      <li>
            Flexibility – When traveling by car, you can change your plans as you go. If you are taking a road trip,
            you can pull off the road at any time and sight-see.
      </li>
    </ul>
    <p>
          We believe that traveling around the world shouldn’t be hard: it’s
          actually something everyone should be able to do at least once in
          their lives.
          Whether you choose to spend a few years or just a couple months
          traveling this beautiful planet, it’s important to see what’s out there.
    </p>
    <button type="submit" className="submit-button">FIND TRIPS</button>
  </div>
);

export default banner;
