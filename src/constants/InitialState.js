export default {
  ui: {
    currentTab: 'RouteList',
    currentAgency: '1',
    currentRoute: null,
    userLocation: null,
    userLocationError: null,
    globalError: null,
    loading: {
      allRoutesLoading: false,
      nearbyTripsLoading: false,
      stopsForRouteLoading: false,
    },
    recent: [
      { type: 'route', id: '1_801' },
      { type: 'stop', id: '1_2606' },
    ],
  },
  oba: {
    arrivalsAndDepartures: {
      '1_2606': {
        arrivalsAndDepartures: [{
          arrivalEnabled: true,
          blockTripSequence: 9,
          departureEnabled: true,
          distanceFromStop: -15889.13553387046,
          frequency: null,
          lastUpdateTime: 1458523690000,
          numberOfStopsAway: -15,
          predicted: true,
          predictedArrivalInterval: null,
          predictedArrivalTime: 1458521400000,
          predictedDepartureInterval: null,
          predictedDepartureTime: 1458521400000,
          routeId: '1_803',
          routeLongName: 'Burnet/S Lamar',
          routeShortName: '803',
          scheduledArrivalInterval: null,
          scheduledArrivalTime: 1458525000000,
          scheduledDepartureInterval: null,
          scheduledDepartureTime: 1458525000000,
          serviceDate: 1458450000000,
          situationIds: [],
          status: 'default',
          stopId: '1_2606',
          stopSequence: 8,
          tripHeadsign: '803 DOMAIN-NB',
          tripId: '1_1564640',
          tripStatus: {
            activeTripId: '1_1564640',
            blockTripSequence: 9,
            closestStop: '1_5724',
            closestStopTimeOffset: -156,
            distanceAlongTrip: 24324.41115803877,
            frequency: null,
            lastKnownDistanceAlongTrip: 0,
            lastKnownLocation: {
              lat: 30.229114532470703,
              lon: -97.80003356933594,
            },
            lastKnownOrientation: 0,
            lastLocationUpdateTime: 0,
            lastUpdateTime: 1458523690000,
            nextStop: '1_5919',
            nextStopTimeOffset: 204,
            orientation: 70.45817983654665,
            phase: '',
            position: {
              lat: 30.393579437037054,
              lon: -97.72098482851548,
            },
            predicted: true,
            scheduleDeviation: -3600,
            scheduledDistanceAlongTrip: 24324.41115803877,
            serviceDate: 1458450000000,
            situationIds: [],
            status: 'default',
            totalDistanceAlongTrip: 25968.232785249747,
            vehicleId: '1_5059',
          },
          vehicleId: '1_5059',
        }],
        nearbyStopIds: [
          '1_5938',
          '1_5965',
        ],
        situationIds: [],
        stopId: '1_2606',
      },
    },
    nearbyTrips: [
      {
        frequency: null,
        schedule: null,
        serviceDate: 1458450000000,
        situationIds: [],
        status: {
          activeTripId: '1_1538496',
          blockTripSequence: 10,
          closestStop: '1_2606',
          closestStopTimeOffset: 13,
          distanceAlongTrip: 11486.18365503769,
          frequency: null,
          lastKnownDistanceAlongTrip: 0,
          lastKnownLocation: {
            lat: 30.28026580810547,
            lon: -97.73486328125,
          },
          lastKnownOrientation: 0,
          lastLocationUpdateTime: 0,
          lastUpdateTime: 1458522665000,
          nextStop: '1_2606',
          nextStopTimeOffset: 13,
          orientation: 164.73151421272067,
          phase: '',
          position: {
            lat: 30.271960291732046,
            lon: -97.73827642223726,
          },
          predicted: true,
          scheduleDeviation: 60,
          scheduledDistanceAlongTrip: 11486.18365503769,
          serviceDate: 1458450000000,
          situationIds: [],
          status: 'default',
          totalDistanceAlongTrip: 22529.47702655043,
          vehicleId: '1_8942',
        },
        tripId: '1_1538496',
      },
    ],
    stopGroups: {},
    references: {
      agencies: {
        1: {
          disclaimer: '',
          id: '1',
          lang: 'en',
          name: 'Capital Metro',
          phone: '512-474-1200',
          privateService: false,
          timezone: 'America/Chicago',
          url: 'http://www.capmetro.org/',
        },
      },
      routes: {
        '1_801': {
          agencyId: '1',
          color: 'E11F8F',
          description: '',
          id: '1_801',
          longName: 'N Lamar S Congress',
          shortName: '801',
          textColor: '000000',
          type: 3,
          url: '',
        },
      },
      stops: {},
      trips: {
        '1_1538496': {
          blockId: '1_556090',
          directionId: '1',
          id: '1_1538496',
          routeId: '1_20',
          routeShortName: '',
          serviceId: '1_105-5',
          shapeId: '1_34643',
          timeZone: '',
          tripHeadsign: '20-Manor Rd/Riverside-SB',
          tripShortName: '',
        },
      },
    },
  },
};
