var calPoints = function (ops) {
  let gradeStack = []

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      gradeStack.pop()
    } else if (ops[i] === "D") {
      let preGrade = gradeStack.pop()
      gradeStack.push(preGrade, preGrade * 2)
    } else if (ops[i] === "+") {
      let pre1Grade = gradeStack.pop()
      let pre2Grade = gradeStack.pop()
      gradeStack.push(pre2Grade, pre1Grade, pre1Grade + pre2Grade)
    } else {
      gradeStack.push(Number(ops[i]))
    }
  }

  return gradeStack.reduce((total, val) => (total += val), 0)
}
