// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyResponse } from '../../models/runningWorkoutsDummy';

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
	// console.log("returning the activites ⚠️", dummyResponse)
	// res.status(200).json(activities)
	res.status(200).json(dummyResponse)
}