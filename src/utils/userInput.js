import { MissionUtils } from '@woowacourse/mission-utils'
import Validation from './validation.js'
import { MESSAGE } from '../constants/message.js'

const userInput = async () => {
	const userInputNum = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT)

	Validation(userInputNum)

	return userInputNum
}
export default userInput
