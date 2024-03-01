import React from 'react'

const About = () => {
  return (
    <div className='about'id='about'>
        <div className='up'>
            <h2>About</h2>
        </div>
        <div className='info'>
            <table>
                <tr>
                    <th>Education:</th>
                    <td>B.Sc Computer Science</td>
                </tr>
                <tr>
                    <th>Skills:</th>
                    <td>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                            <li>API</li>
                        </ul>
                    </td>
                </tr>
                <tr><th>Git Link:</th><td><a href="https://github.com/adithya0808" className='git'>Click here</a></td></tr>
                <tr><th>Linkedin:</th><td><a href="https://www.linkedin.com/in/adithyan-a-6989b0227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='git'>Click here</a></td></tr>
            </table>
        </div>
    </div>
  )
}

export default About