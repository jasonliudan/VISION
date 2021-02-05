import axios from "axios";

export const getTransactions = async () => {
	const data = await axios.get(
		"https://api.apy.vision/currentLPCount/0x6555c79a8829b793F332f1535B0eFB1fE4C11958/0x9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d/0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5/11407437"
	);
	return data.data;
};
