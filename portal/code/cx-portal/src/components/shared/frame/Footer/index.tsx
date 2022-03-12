import { NavMenu } from '../NavMenu'
import './Footer.scss'

export const Footer = ({ pages }: { pages: string[] }) => (
  <div className="Footer">
    <div>
      <NavMenu horizontal={true} plain={true} pages={pages} />
    </div>
    <span className="copyright">Copyright © Catena-X Automotive Network</span>
  </div>
)
