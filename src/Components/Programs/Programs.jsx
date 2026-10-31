import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const programs = [
  { image: program_1, icon: program_icon_1, title: 'Undergraduate degrees', alt: 'Students learning together' },
  { image: program_3, icon: program_icon_3, title: 'Postgraduate study', alt: 'Student working on a degree' },
  { image: program_2, icon: program_icon_2, title: 'Professional programs', alt: 'Students collaborating on a project' },
]

const Programs = () => (
  <div className="programs">
    {programs.map((program) => (
      <article className="program" key={program.title}>
        <img src={program.image} alt={program.alt} />
        <div className="caption">
          <img src={program.icon} alt="" />
          <p>{program.title}</p>
        </div>
      </article>
    ))}
  </div>
)

export default Programs
