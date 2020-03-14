// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom';

// import Nav from './Nav';
// import PlanList from './plan/PlanList'

// import ProfileForm from './profile/ProfileForm';

// class Page extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             plans: []
//         }
//     }

//     render() {
//         const props = this.props
//         return (
//             <div>
//                 <Nav />
//                 <div className="container">
//                     <ProfileForm />
//                     <div className="col-3of5 bg-white">
//                         <PlanList />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapState = state => ({
//     profile: state.user.profile,
//     token: state.user.token,
//     tweets: state.tweets
// })

// const mapDispatch = dispatch => ({
//     loadData: () => dispatch.tweets.loadData(),
//     updateUser: user => dispatch.user.update(user),
//     logout: () => dispatch.user.logout(),
//     addTweet: tweet => dispatch.tweets.add(tweet),
//     removeTweet: id => dispatch.tweets.remove(id)
// })

// export default withRouter(connect(mapState, mapDispatch)(Page));

// // export default Page;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Profile from './Profile';
import ProfileForm from './ProfileForm'
import PlanList from './Planlist';
import './Dashboard2.css';


export default class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      plans: [{
          "location": "Seattle",
          "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTxUvwXrcrJKXRFsKAGjDcc02pv_Ery7luboh8N6_vipAqNoJ5BI3ZOcIwCvfdeUc4qViGAJXNp9e5C4ErfL9C-G9IEr_3CuWahuJT85GO9GAG8PRq__zcCGKExWa-vqtRdcUYliVRkBjNDQMlxGWz1rE_4etko4M1frNb8t6A2ERWkNb0zn0YQ1JoFzr5NFG4lUOGR6j2oaLvJd441qtxFSOP1vC8dxShLmI7PL0W08r3yYfqHJvvT3peQl8MK8kdSTJa5EX2C9yYJARMb-6zQuTNR7OCmUO9qJ5nm9Ak3DUGT0=",
          "duration": 7,
          "createdAt": "2018-04-27T05:20:26.844Z"
      },{
          "location": "Berlin",
          "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTxY3rFwYTAuzyqlWRiZc1XvbWkDJPEPhFguGR1DP0SP4ptKfi_hSfQm5FfHjayiNLXBBXPNlUAIr9etgZ7Kz9WTN2o7xFrAXulbAJ6mv5PAH4-N4UgzHXRFg-tlsGd3JGeII6k5tfuZw_uCVATVU4G2IGZlKQi9vz-Kwv7yRcFC-h4ef7YMq9sssLLLYINfsWgHHYlsXSSDLVKA8ZDiTYGldiKCOSSMg5qGIWTE2Go4s_rLF1ab1WxDYTAv8nwseUBVA8jKwHBer_9qrX2vqWy9MG3f2uh-QmepGMcWO20j8bo4=",
          "duration": 12,
          "createdAt": "2018-05-26T05:20:26.844Z"
      },{
          "location": "Lisbon",
          "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTycalVCb3gxcorBFMtrmsr-70y4SBtBFZ6e4EiEFXf33zQBc5y00IBIvsMlRVH5vYxWDPkhwF9LfrQzzSJ8nMPsmiubJukuR40R1RzBWpdY98STnEIpCWJ3TIeqOxuQu5BC8e-V8NoAY1nZ75N1NJQFezkuh06BMcg97461ipILsQs3GuhnQL0q0NyFv2ERcFIi9_sy7dW3JLJ2c-9TFZ3iDd-8hOgoSrdRyXu4hiE9rkiC5vNRx8FnzaH54154VRkLuuEsf89cr3rA7Oskhyi0NbgKspEPUtQzwzGBe5Se1ywg=",
          "duration": 5,
          "createdAt": "2019-08-31T05:10:46.617Z"
      },{
          "location": "Vancouver",
          "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTyeDtH_DOdWT1HEPjBHevecPwEeO6lasX8Cwy1Y131rpu59NaPMJ91r7XEyN-jcDbIXVYnh3NTDsU3Zi1y0HIY-4TbZqqkiymvzW8b-USntRQLsGduEaP0SFfWssADGYij4vVLUp3ejv3apPlqWhGthBtIvbYZOxmIJu12FhOvrlL6IMNtkyCw-dfiR109Jl3ObPiJuoVdnKsNJpJaFb_9TNCgS7hSF0HpNVbmKX16ACiDFwYFGjlhSI0j1XVlIQ5pVdD26FeS8CzvW_5nKiDLnc6AmROK5FMp3l08OhYx76Jw4=",
          "duration": 9,
          "createdAt": "2020-01-16T19:03:41.924Z"
      }]
  }
  }
  render() {
    return (
      <div>
        <div className="container">
          <Route path='/dashboard2' exact render={() => <Profile />} />
          <Route path='/dashboard/edit' render={() => <ProfileForm />} />
          <div className="col-3of5 bg-white">
              <PlanList plans={this.state.plans} />
          </div>
        </div>
      </div>
    )
  }
}
