import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';\
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../../features/partners/partnersSlice';

const DisplayList = () => {
    const items = [
        selectFeaturedCampsite(), 
        selectFeaturedPromotion(),
        selectFeaturedPartner()
    ];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                    
                )
            }
            )};
        </Row>
    )
};

export default DisplayList;