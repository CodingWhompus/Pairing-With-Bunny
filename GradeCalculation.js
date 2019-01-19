const calculatePercentageGrade = function (score, total) {
    return (score / total) * 100
}

const calculateLetterGrade = function (percentageGrade) {
    if (percentageGrade >= 90) {
        return 'A'
    }
    if (percentageGrade >= 80) {
        return 'B'
    }
    if (percentageGrade >= 70) {
        return 'C'
    }
    if (percentageGrade >= 60) {
        return 'D'
    }
    return 'F'
}
const formatGradeString = function (letterGrade, yourPercentageGrade) {
    if (letterGrade === 'A' || letterGrade === 'F') {
        return `You got an ${letterGrade} with a ${yourPercentageGrade}%`
    } return `You got a ${letterGrade} with a ${yourPercentageGrade}%`
}
const yourPercentageGrade = calculatePercentageGrade(4, 10)
const yourLetterGrade = calculateLetterGrade(yourPercentageGrade)
console.log(formatGradeString(yourLetterGrade, yourPercentageGrade))
