import background from "./images/background.png";
import Facebook from "./images/Facebook.svg";
import GitHub from "./images/GitHub.svg";
import LinkedIn from "./images/LinkedIn.svg";
import sapious from "./images/Logo.svg";

import "./portfolio.css";
import React from 'react';

const Portfolio = () => {
    return (
        <div className='cv'>
        <div class="content">
		<img class="logo" src={sapious} alt="sapious logo" />
		<div class="card" id="profileSummary">
			<div class="profile">
				<img src={background} alt="my img" />
				<div class="contact">
					<div>Contact:</div>
					<div class="social">
						<a href="https://www.facebook.com/Montassarthemri/">
							<img src={Facebook} alt="Facebook" />
						</a>
						<a href="https://github.com/TH-montassar">
							<img src={GitHub} alt="Github" />
						</a>
						<a href="https://www.linkedin.com/in/themri-montassar-160042149/">
							<img src={LinkedIn} alt="LinkedIn" />
						</a>
					</div>
				</div>
			</div>
			<div class="summary">
				<h1>Montassar Themri</h1>
				<h3>Web developer</h3>
				<p>
					Etudiant en 3 eme année(PFE) a iset jendouba,passionné de technologie et de devloppement,
				</p>
				<p>Mon objectif est de developper mes competences dans le but d’atteindre des postes clefs </p>
				<p>dans la suite de ma carriere</p>
			</div>
		</div>
		<div class="blocks">

			<div class="column">
				<div class="card">
					<h1>Contact</h1>
					<ul>
						<li><img src="./images/address-24.png" alt="locations" /> Bizerte, Tunisie</li>
						<li> <img src="./images/call.png" alt="phone" />+216 26236286</li>
						<li> <img src="./images/email-24.png" alt="email" /> montassar.themri1@gmail.com</li>
					</ul>

				</div>
				<div class="card">
					<h2>CERTIFICATION</h2>
					<div class="certifs">

						<ul>
							<li>MTA :Database Fundamentals</li>
							<li>Android development online course</li>
							<li>Crash Course on Python</li>
						</ul>


						<ul>
							<li>Microsoft</li>
							<li>the bridge</li>
							<li>google</li>
						</ul>


					</div>
				</div>
				<div class="card">
					<h2>FORMATION</h2>
					<dt>2022 ETUDIANT EN TECHNOLOGIES DE l'informatique</dt>
					<dd>Jendouba, tunise=====Iset jendouba</dd>

				</div>
				<div class="card">

					<h2>Language</h2>
					<ul>
						<li>English</li>
						<li>Arabic</li>
						<li>French</li>
					</ul>

				</div>
				<div class="card">
					<h2>
						<dt>Soft Skills </dt>
					</h2>
					<dd>Flexibilité/Adaptabilité</dd>
					<dd>Gestion de crise</dd>
					<dd>Leadership</dd>
					<dd>Travail en équipe</dd>
					<dd>Empathie</dd>
					<dd>Proactivité</dd>
				</div>




			</div>
			<div class="column">
				<div class="card">
					<h1>EXPÉRIENCE PROFESSIONNELLE</h1>


					<table>
						<thead>
							<th></th>
							<td>
								<h2>BEE CODERS</h2>
							</td>
						</thead>
						<tbody>
							<tr>
								<td>
									<dd>De 01/07/2021 a 31/07/2021 </dd>
									<dd>(Ariana, Tunisie)</dd>
								</td>

								<td>
									<dt>STAGE (TECHNICIEN) obligatoire</dt>
									<dd> Tâches réalisées :</dd>
									<ul>
										<li>
											développer une application mobile
										</li>
									</ul>
								</td>

							</tr>
							<tr>
								<td>
									<dd> De 10/08/2020 a 05/09/2020</dd>
									<dd>(Ariana, Tunisie)</dd>
								</td>
								<td>
									<h2>ESCOM</h2>
									<dt>STAGE (INITIATION) obligatoire</dt>
									<dd> Tâches réalisées :</dd>
									<ul>
										<li>
											Creation d'un statique site web pour l'entreprise
										</li>
										<li>Observer et decrire l'organisation structurelle et opertionll de
											l'entreprise</li>
										<li>Formation sage</li>
									</ul>
								</td>
							</tr>

						</tbody>
					</table>


				</div>
				<div class="card">

					<h2>PROJETS PERSONNELS & ACADÉMIQUES</h2>
					<ul>
						<li>AOÛT 2021</li>
						<dd>Développement d'une application mobile Aguide Tour </dd>
						<dd>pour guidee le touriste</dd>
						<dd>Mots clés :Android studio, java , xml, firebase</dd>
						<li>SEPTEMBRE 2021</li>
						<dd>Développement d'une application web gestion de stock</dd>
						<dd>Mots clés: Spring boot , java , xml, MySQL ,html ,CSS , js</dd>
					</ul>

				</div>
				<div class="card">
					<h2>COMPÉTENCES</h2>
					<ul>
						<li>Développement mobile & web</li>
						<dd>HTML</dd>
						<dd>CSS</dd>
						<dd>PHP</dd>
						<dd>JEE</dd>
						<dd>JavaScript</dd>
						<dd>java</dd>
						<dd>c</dd>
						<dd>python</dd>
						<li>Base de données</li>
						<dd>SQL</dd>
						<dd>PLSQL</dd>
						<dd>MYSQL</dd>
						<dd>ORACLE</dd>
						<dd>mongoDB</dd>
						<li>Outils de développement</li>
						<dd>Lunix</dd>

					</ul>


				</div>


			</div>



		</div>



	</div>

            
        </div>
    );
}

export default Portfolio;
