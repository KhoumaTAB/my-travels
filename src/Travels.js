import React from "react";
import Travel from "./Travel.js";

const travels = [
  {
    destination: "Tokyo",
    country: "Japan",
    photo: "https://img.jakpost.net/c/2018/04/24/2018_04_24_44783_1524575971._large.jpg",
    distance: "9 601 km"
  },
  {
    destination: "Los Angeles",
    country: "United States of America",
    photo: "https://back-cwl.orchestra-platform.com/admin/TS/fckUserFiles/Content_Image/entete/losangeles_adobestock.jpg",
    distance: "9 136 km"
  },
  {
    destination: "Bombay",
    country: "India",
    photo: "https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_1280/public/assets/images/2017-09-11_bombay.jpg?itok=keDyvBoT",
    distance: "6 884 km"
  },
  {
    destination: "Moscow",
    country: "Russia",
    photo: "https://higherlogicdownload.s3.amazonaws.com/IMANET/0be307fc-98fd-412d-b879-ae9a90f110de/UploadedImages/Moscow.jpg",
    distance: "2 744 km"
  },
  {
    destination: "Dublin",
    country: "Ireland",
    photo: "https://www.riotgames.com/darkroom/1440/0dffc174c72ce3dbaa23a8650557b624:79c68bf22b496b9ffdab7bcb34c930d1/dublin.jpg",
    distance: "1 024 km"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;
