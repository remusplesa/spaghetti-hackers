// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { GarminConnect } = require('garmin-connect');

type Data = {
  name: string
}

let activities: []
let GCClient = new GarminConnect()
const createClient = async() => {
	await GCClient.login(process.env.GARMIN_CONNECT_EMAIL, process.env.GARMIN_CONNECT_PASSWORD)
	console.log('🏆 Logged in')
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const getGarminActivities = async () => {
		// if(!GCClient.sessionJson.userHash){
		// 	console.log("❌ not logged in")
		// 	await createClient()
		// }

		console.log("🏃‍♂️ Returned activities", activities)
		const userInfo = await GCClient.getUserInfo()
		activities = await GCClient.getActivities()
    }

	// await getGarminActivities()
	// console.log("returning the activites ⚠️", activities)
	res.status(200).json(dummyResponse)
}

var dummyResponse = 
    {
    activityId: 8993898987,
    activityName: 'Timisoara Running',
    description: null,
    startTimeLocal: '2022-06-10 14: 03: 43',
    startTimeGMT: '2022-06-10 11: 03: 43',
    activityType: {
      typeId: 1,
      typeKey: 'running',
      parentTypeId: 17,
      isHidden: false,
      sortOrder: null,
      restricted: false,
      trimmable: true
        },
    eventType: { typeId: 9, typeKey: 'uncategorized', sortOrder: 10
        },
    comments: null,
    parentId: null,
    distance: 6350.68994140625,
    duration: 2600.794921875,
    elapsedDuration: 2600.794921875,
    movingDuration: 2571.8740234375,
    elevationGain: 29.52999997138977,
    elevationLoss: 24.20999999344349,
    averageSpeed: 2.441999912261963,
    maxSpeed: 2.7709999084472656,
    startLatitude: 45.74702672660351,
    startLongitude: 21.20768018066883,
    hasPolyline: true,
    ownerId: 105378560,
    ownerDisplayName: 'dc65da42-14a7-4a99-9976-461b666abdb9',
    ownerFullName: 'George',
    ownerProfileImageUrlSmall: null,
    ownerProfileImageUrlMedium: null,
    ownerProfileImageUrlLarge: null,
    calories: 448,
    averageHR: 159,
    maxHR: 174,
    averageRunningCadenceInStepsPerMinute: 156.875,
    maxRunningCadenceInStepsPerMinute: 180,
    averageBikingCadenceInRevPerMinute: null,
    maxBikingCadenceInRevPerMinute: null,
    averageSwimCadenceInStrokesPerMinute: null,
    maxSwimCadenceInStrokesPerMinute: null,
    averageSwolf: null,
    activeLengths: null,
    steps: 6768,
    conversationUuid: null,
    conversationPk: null,
    numberOfActivityLikes: null,
    numberOfActivityComments: null,
    likedByUser: null,
    commentedByUser: null,
    activityLikeDisplayNames: null,
    activityLikeFullNames: null,
    activityLikeProfileImageUrls: null,
    requestorRelationship: null,
    userRoles: [ 'ROLE_CONNECTUSER', 'ROLE_FITNESS_USER', 'ROLE_WELLNESS_USER'
        ],
    privacy: { typeId: 2, typeKey: 'private'
        },
    userPro: false,
    courseId: null,
    poolLength: null,
    unitOfPoolLength: null,
    hasVideo: false,
    videoUrl: null,
    timeZoneId: 473,
    beginTimestamp: 1654859023000,
    sportTypeId: 1,
    avgPower: null,
    maxPower: null,
    aerobicTrainingEffect: 3.200000047683716,
    anaerobicTrainingEffect: 0.20000000298023224,
    strokes: null,
    normPower: null,
    leftBalance: null,
    rightBalance: null,
    avgLeftBalance: null,
    max20MinPower: null,
    avgVerticalOscillation: 10.430000305175781,
    avgGroundContactTime: 283,
    avgStrideLength: 92.20999755859376,
    avgFractionalCadence: null,
    maxFractionalCadence: null,
    trainingStressScore: null,
    intensityFactor: null,
    vO2MaxValue: 47,
    avgVerticalRatio: 11.130000114440918,
    avgGroundContactBalance: 49.72999954223633,
    lactateThresholdBpm: null,
    lactateThresholdSpeed: null,
    maxFtp: null,
    avgStrokeDistance: null,
    avgStrokeCadence: null,
    maxStrokeCadence: null,
    workoutId: null,
    avgStrokes: null,
    minStrokes: null,
    deviceId: 3379240826,
    minTemperature: 31,
    maxTemperature: null,
    minElevation: 87.19999694824219,
    maxElevation: 98.4000015258789,
    avgDoubleCadence: null,
    maxDoubleCadence: 180,
    summarizedExerciseSets: null,
    maxDepth: null,
    avgDepth: null,
    surfaceInterval: null,
    startN2: null,
    endN2: null,
    startCns: null,
    endCns: null,
    summarizedDiveInfo: {
      weight: null,
      weightUnit: null,
      visibility: null,
      visibilityUnit: null,
      surfaceCondition: null,
      current: null,
      waterType: null,
      waterDensity: null,
      summarizedDiveGases: [],
      totalSurfaceTime: null
        },
    activityLikeAuthors: null,
    avgVerticalSpeed: null,
    maxVerticalSpeed: 0.40000152587890625,
    floorsClimbed: null,
    floorsDescended: null,
    manufacturer: 'GARMIN',
    diveNumber: null,
    locationName: 'Timisoara',
    bottomTime: null,
    lapCount: 7,
    endLatitude: 45.74644493870437,
    endLongitude: 21.207718402147293,
    minAirSpeed: null,
    maxAirSpeed: null,
    avgAirSpeed: null,
    avgWindYawAngle: null,
    minCda: null,
    maxCda: null,
    avgCda: null,
    avgWattsPerCda: null,
    flow: null,
    grit: null,
    jumpCount: null,
    caloriesEstimated: null,
    caloriesConsumed: null,
    waterEstimated: 722,
    waterConsumed: null,
    maxAvgPower_1: null,
    maxAvgPower_2: null,
    maxAvgPower_5: null,
    maxAvgPower_10: null,
    maxAvgPower_20: null,
    maxAvgPower_30: null,
    maxAvgPower_60: null,
    maxAvgPower_120: null,
    maxAvgPower_300: null,
    maxAvgPower_600: null,
    maxAvgPower_1200: null,
    maxAvgPower_1800: null,
    maxAvgPower_3600: null,
    maxAvgPower_7200: null,
    maxAvgPower_18000: null,
    excludeFromPowerCurveReports: null,
    totalSets: null,
    activeSets: null,
    totalReps: null,
    minRespirationRate: null,
    maxRespirationRate: null,
    avgRespirationRate: null,
    trainingEffectLabel: 'TEMPO',
    activityTrainingLoad: 95.85028076171875,
    avgFlow: null,
    avgGrit: null,
    minActivityLapDuration: 138.93499755859375,
    avgStress: null,
    startStress: null,
    endStress: null,
    differenceStress: null,
    maxStress: null,
    aerobicTrainingEffectMessage: 'IMPACTING_TEMPO_22',
    anaerobicTrainingEffectMessage: 'NO_ANAEROBIC_BENEFIT_0',
    splitSummaries: [
            [Object
            ],
            [Object
            ],
            [Object
            ]
        ],
    hasSplits: true,
    maxBottomTime: null,
    hasSeedFirstbeatProfile: null,
    calendarEventId: null,
    calendarEventUuid: null,
    avgGradeAdjustedSpeed: null,
    avgWheelchairCadence: null,
    maxWheelchairCadence: null,
    favorite: false,
    pr: false,
    autoCalcCalories: false,
    atpActivity: false,
    purposeful: false,
    manualActivity: false,
    elevationCorrected: false,
    decoDive: false,
    parent: false
    }