const degreesToRadians = (degrees) => (degrees * (Math.PI / 180));
const EARTH_RADIUS_KM = 6371;

const greatCircleDistance = (position1, position2) => {

    const lat1 = degreesToRadians(position1[0]);
    const lon1 = degreesToRadians(position1[1]);
    const lat2 = degreesToRadians(position2[0]);
    const lon2 = degreesToRadians(position2[1]);

    const absoluteLongitudinalDifference = Math.abs(lon2 - lon1);
    const centralAngle = Math.acos((Math.sin(lat1) * Math.sin(lat2) + (Math.cos(lat1) * Math.cos(lat2) * Math.cos(absoluteLongitudinalDifference))));

    return EARTH_RADIUS_KM * centralAngle;
};

module.exports.greatCircleDistance = greatCircleDistance;