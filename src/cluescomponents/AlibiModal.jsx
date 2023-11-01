import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import helicopter from '../assets/Helicopter.jpeg';
import '../styles/Newspaper.css';

const AlibiModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="newspaper-container custom-width">
          <h1 className="header">Alibis</h1>
          <br />
          <h2 className='sub-header'>A 26-year-old advocate was tragically murdered, while her twin sister was abducted from a cabin house in DevTown</h2>
          <p className="author">
            By Stephanie Li<br />
            <i className='writer'>Staff Writer for the Devtown Daily</i>
          </p>
          <p className='paragraph-text'>Today, our local community is in a state of shock and heightened vigilance due to a distressing incident that occurred in the early hours. In this tragic event, a 26-year-old woman from Morrow lost her life, and her twin sister is currently missing. At around 4:30 am this morning, McKenna Doe contacted 911 to report a home invasion at their family's cabin in Morrow. During the incident, she and her twin sister, Toni, were the only occupants of the residence located on Marsh Lagoon. McKenna informed the 911 operator that an unknown intruder had forcibly entered their home, restrained her sister, and posed a threat to her before the call abruptly disconnected.</p>
          <div className="missing-girl-container">
            <img src="https://image1.masterfile.com/getImage/NzAwLTAwMDMzMzA2ZW4uMDAwMDAwMDA=AGbv2G/700-00033306en_Masterfile.jpg" alt="missing girl" className="news-image" />
            <div className="missing-girl-text">
              <p className='paragraph-text2'>
                When the police arrived, they found McKenna deceased inside the house, and neither her twin sister, Toni, nor the intruder was in sight. A statewide manhunt quickly ensued, involving roadblocks and additional personnel, including K-9 and helicopter units, as efforts were made to locate Toni and the assailant. At this moment, both remain missing. Leading the investigation for the Morrow Police Department is Homicide Detective Manti Fettuccine, who, during a morning press conference at the Morrow Police Station, expressed, "We have strong reasons to believe Toni Doe is still alive, and we're sparing no effort to reunite her with her already grieving family. I personally delivered the devastating news of McKenna's passing to her mother earlier today, and I'm determined not to have to do it again."
              </p>
            </div>
          </div>
          <div className='murder-mystery-container'>
            <div className="murder-mystery-text">
              <p className='paragraph-text'>
                The Doe twins, who were born and raised in Morrow and graduated from Morrow High School two years ago, made a name for themselves during their time at CHS. They were recognized for shedding light on illicit drug activities in Forest Park Preserve. Always inseparable, the twins resided in Morrow with their mother, local zoologist Ellen Doe, and their stepfather, John McKinsey. Both McKenna and Toni were sophomore students enrolled in the Criminology Studies Program at Florida College. Detective Fettuccine remains optimistic about the search for Toni and stated, "We have promising leads in the case. We're determined to locate Toni and hold those responsible for today's events accountable. Our goal is to bring Toni back safely, and we're committed to solving this case together."
              </p>
              <br />
              <p className='paragraph-text'>If you have any information on this time-senstive case, please call Morrow Police Tipline at (503) 333-5799. All tips and informants will kept strictly confidential.</p>
            </div>
            <img src={helicopter} alt="helicopter" className="news-image" />
          </div>

          <h2 className='sub-header'>Tomorrow Marks One-Year Anniversary of Dez Giant's Disappearance</h2>
          <p className="author">
            By Peter Jackson<br />
            <i className='writer'>Staff Writer for the Devtown Daily</i>
          </p>
          <p className='paragraph-text'>Tomorrow at 4:45 pm in Morrow Park, friends and family of Dez Giant will gather to commemorate the one-year anniversary of her enigmatic disappearance. Dez, who would have celebrated her 19th birthday last Friday, was on a camping trip with friends at Forest Park Preserve, located just east of Marsh Lagoon, when she vanished. Her friends last spotted her collecting firewood around 4 pm in the afternoon. Concerned about her prolonged absence, they initiated a search and, as night fell, contacted the authorities for assistance.  </p>
          <div className="missing-girl-container">
            <img src="https://www.helenbartlett.co.uk/wp-content/uploads/2023/08/teenage-portrait-black-and-white.jpg" alt="missing girl" className="news-image" />
            <div className="missing-girl-text">
              <p className='paragraph-text'>
                Search teams scoured the area intensively for weeks but failed to find any trace of Dez. The lead investigator at that time, Muyanye Jenry, expressed concerns, saying, "There have been reports of a large black bear rummaging through nearby trash. We sincerely hope and pray that Dez did not encounter it." Dez's mother, Alice Giant, appealed for information, saying, "It's been a year since my daughter went missing, and we still have no answers. If you have any information, please inform the authorities."
                <br /> <br />Jack Dan, who used to be Dez's boyfriend, remarked, "This was out of character for Dez; she was familiar with these woods and always kept in touch with us during hikes. Initially, we thought she might be playing a prank on us."
              </p>
            </div>
          </div>

          <h2 className='sub-header'></h2>
          <p className='paragraph-text'>
            If anyone has any information on Dez Giant or her whereabouts, please contact the Morrow PD at (503) 333 - 2854. Ms Giant is the sixth young woman to have gone missing in these woods in the past 10 years.
          </p>
          <br />
          <div className="image-with-border">
            <img src="https://adstrategy.files.wordpress.com/2010/04/1951_coke_ad_p6_charleroi-mail2.jpg" alt="Movie Set" className="coke-image" />
            <div className="text-inside-border">
            <h1 className='coke-header' style={{ textAlign: "center", fontStyle: "italic" }}>Coca-Cola</h1>
            <h3 className='coke-header2'>Announcing a Reduction In Bottled Coca-Cola To The Old Pre-War Price of Fifteen Cents</h3>
              <p className='coke-text'>We are delighted to announce to the public that our company is now offering Bottled Coca-Cola to retailers at a price that allows them to sell it for just 15 CENTS PER BOTTLE once again.<br /> <br /> We understand that people are seeking cost reductions in their purchases during these times. We recently received confirmation that Coca-Cola syrup prices will be lowered on November 1st. Until then, we not only intend to forgo our profits but also absorb a loss. <br/><br /> Would you please express your gratitude by requesting BOTTLED COCA-COLA? Bottled Coca-Cola maintains its exceptional quality, and there are three compelling reasons to choose Coca-Cola from Bottles:<br/><br />1st: You get genuine Coca-Cola. <br />2nd: From sealed and hygienic bottles. <br />3rd: It's mixed to perfection.  </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='custom-button' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlibiModal;
