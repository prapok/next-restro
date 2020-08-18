import { useContext } from 'react';
import {StaffsContext} from '../../contexts/StaffsContext';

function OurStaffs() {
    const {staffs} = useContext(StaffsContext);
    const heading = staffs[0].Heading;
    const subHeading = staffs[0].Subheading;
    const ourStaffs = staffs[0].Workers;
    return (
        <div className="container-fluid background-color">
            <div className="container">
                <div className="section-title">
                    <h2>{heading}</h2>
                    <p>{subHeading}</p>
                </div>
                <div className="row">
                { ourStaffs.map((staff, ind) => 
                  <div key={ind} className="col-sm-6 col-md-6 col-lg-3">
                    <div className="team-card">
                        <figure className="avatar"><img src={`${staff.Photo.url}`} alt="" /></figure>
                        <div className="caption">
                            <h5>{staff.StaffName}</h5>
                            <p>{staff.staffDesignation}</p>
                        </div>
                    </div>
                  </div>
                  )}
                </div>
            </div>
        </div>
    )
}

export default OurStaffs;