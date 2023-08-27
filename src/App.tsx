import './App.css'
import { useState } from 'react'
import questions from '../Questions.json'

interface Question {
	id: number,
	texto: string
}

interface Answer extends Question {
	valoracion: 1 | 2 | 3 | 4 | 5
}
function App(): JSX.Element {
	const [answers, setAnswers] = useState<Answer[]>([])
	const CurrentQuestion = questions.preguntas[answers.length]

	const handleRate = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAnswers(answers => answers.concat({
			...CurrentQuestion,
			valoracion: Number(e.target.value) as Answer['valoracion']
		}))
	}

	if (!CurrentQuestion) {
		return(
			<ul>
				{answers.map(item => (
					<li key={item.id}>
						{item.texto} - {item.valoracion}
					</li>
				))}
			</ul>
		)
	}

	return (
		<>
			<h1>Holi ☆★</h1>
			<p>{CurrentQuestion.texto}</p>
			<select onChange={handleRate}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>
			{/* 			<span>{'★'.repeat(3).padEnd(5, '☆')}</span>	 */}
		</>
	)
}

export default App
