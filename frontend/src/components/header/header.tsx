import { HeaderSTL } from './headerSTL';
import profilePhoto from '../../images/profile.jpg';

export function Header(): any {
  return (
    <HeaderSTL>
      <img
        src={profilePhoto}
        alt="foto de francisco lucas"
        className="profileImg"
      />
      <div className="title">
        <h1>Fullstack</h1>
        <div className="bottomBar" />
      </div>
      <section>
        <a href='https://github.com/lucalves3/DG' target="_blank" rel="noreferrer">Github</a>
        <div className="PipeBar" />
        <a href="https://www.linkedin.com/in/franciscolucasoliveiraalves/" target="_blank" rel="noreferrer">Linkedin</a>
      </section>
    </HeaderSTL>
  );
}
