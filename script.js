let studenList = [
  {
    name: 'Marcel',
    firstGrade: 8,
    secondGrade: 2
  },
  {
    name: 'Rafaela',
    firstGrade: 10,
    secondGrade: 9
  },
  {
    name: 'Renato',
    firstGrade: 8,
    secondGrade: 9
  }
]

function media() {
  for (let i = 0; i < 3; i++) {
    alert(
      `O(a) aluno(a) ${studenList[i].name} obteve média ${
        (studenList[i].firstGrade + studenList[i].secondGrade) / 2
      }`
    )
    if ((studenList[i].firstGrade + studenList[i].secondGrade) / 2 > 7) {
      alert('Parbéns, você foi aprovado(a)')
    } else {
      alert('Infelizmente você não foi aprovado. Tente novamente. ')
    }
  }
}

media()
