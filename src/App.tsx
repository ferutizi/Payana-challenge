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

	const handleRate = (rating: Answer['valoracion']) => {
		setAnswers(answers => answers.concat({
			...CurrentQuestion,
			valoracion: Number(rating) as Answer['valoracion']
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
			<div>
				{'★'.repeat(3).padEnd(5, '☆').split('').map((i, index) => 
					<span key={index} onClick={() => handleRate((index + 1) as Answer['valoracion'])}>{i}</span>
				)}
			</div>
		</>
	)
}

export default App
