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
	const [hoverValue, setHoverValue] = useState(0)
	const CurrentQuestion = questions.preguntas[answers.length]

	const handleRate = (rating: Answer['valoracion']) => {
		setAnswers(answers => answers.concat({
			...CurrentQuestion,
			valoracion: Number(rating) as Answer['valoracion']
		}))
	}

	if (!CurrentQuestion) {
		return(
			<ul className='max-w-xl mx-auto m-12'>
				{answers.map(item => (
					<li className='text-xl font-small p-2 text-left' key={item.id}>
						{item.texto} - <span className='text-yellow-400'>{'★'.repeat(item.valoracion).padEnd(5, '☆')}</span>
					</li>
				))}
			</ul>
		)
	}

	return (
		<>
			<h1 className='text-5xl font-bold m-12'>Payana</h1>
			<p className='text-xl font-medium'>{CurrentQuestion.texto}</p>
			<div className='m-2'>
				{'★'.repeat(hoverValue).padEnd(5, '☆').split('').map((i, index) => 
					<span
						className='text-3xl m-1 font-medium cursor-pointer text-yellow-400'
						key={index}
						onClick={() => handleRate((index + 1) as Answer['valoracion'])}
						onMouseOver={() => setHoverValue((index + 1) as Answer['valoracion'])}
					>{i}
					</span>
				)}
			</div>
		</>
	)
}

export default App
