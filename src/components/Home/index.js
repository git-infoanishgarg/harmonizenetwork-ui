import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStories } from "./redux/actions";

class Home extends Component {


    fetchStories(){
        this.props.dispatch(getStories());
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
    }

    render() {
        
        return (
            <div className="body-wrapper" style={{background : this.props.theameColors.primaryColor}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sidebar-canvas">
                                <div className="input-search">
                                    <input class="form-control" type="text" placeholder="Search Songs"/>
                                    <div className="search-link">
                                        <a href="javascript.void()" type="link"><u>Advanced Search >></u></a>
                                    </div>
                                </div>
                                <div className="whats-News">
                                    <div className="news-title">
                                        <img src="/images/sound_icon.png" alt="sound-icon"/>
                                        <h2 onClick={this.fetchStories.bind(this)}>What's News?</h2>
                                    </div>

                                    <ul className="whatsNews-list">
                                        <li>
                                            <div className="promo-img">
                                                <a href="javascript.void()">
                                                    <img class="img-responsive" alt="img" src="https://s3-us-west-2.amazonaws.com/mlnportal/attachments/fffdc6e0-e987-4670-bc4d-0495d18f1dec/Screen_Shot_2018-03-27_at_8.27.52_PM_128x96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJGYXNJ5TVKJKAI6Q/20200630/us-west-2/s3/aws4_request&amp;X-Amz-Date=20200630T125219Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d942a3e1eac08d24695162d7acdf1f236856a0bea5d6e32ff8eec9fbdcf3cb75 "/>
                                                </a>
                                            </div>

			                                <div class="Promo-content">
                                                <p>***** New Song Release: Home of My Own ...</p>
                                                <a href="javascript.void()" class="purple-text">
                                                    <u>Read more > </u>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="promo-img">
                                                <a href="javascript.void()">
                                                    <img class="img-responsive" alt="img" src="https://s3-us-west-2.amazonaws.com/mlnportal/attachments/fffdc6e0-e987-4670-bc4d-0495d18f1dec/Screen_Shot_2018-03-27_at_8.27.52_PM_128x96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJGYXNJ5TVKJKAI6Q/20200630/us-west-2/s3/aws4_request&amp;X-Amz-Date=20200630T125219Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d942a3e1eac08d24695162d7acdf1f236856a0bea5d6e32ff8eec9fbdcf3cb75 "/>
                                                </a>
                                            </div>

			                                <div class="Promo-content">
                                                <p>***** New Song Release: Home of My Own ...</p>
                                                <a href="/article/new-song-release:-home-of-my-own" class="purple-text">
                                                    <u>Read more ></u>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="promo-img">
                                                <a href="/article/new-song-release:-home-of-my-own">
                                                    <img class="img-responsive" alt="img" src="https://s3-us-west-2.amazonaws.com/mlnportal/attachments/fffdc6e0-e987-4670-bc4d-0495d18f1dec/Screen_Shot_2018-03-27_at_8.27.52_PM_128x96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJGYXNJ5TVKJKAI6Q/20200630/us-west-2/s3/aws4_request&amp;X-Amz-Date=20200630T125219Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d942a3e1eac08d24695162d7acdf1f236856a0bea5d6e32ff8eec9fbdcf3cb75 "/>
                                                </a>
                                            </div>

			                                <div class="Promo-content">
                                                <p>***** New Song Release: Home of My Own ...</p>
                                                <a href="/article/new-song-release:-home-of-my-own" class="purple-text">
                                                    <u>Read more ></u>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="news-title">
                                        <img src="/images/download_icon.png" alt="download_icon"/>
                                        <h2>Get Download Credits</h2>
                                    </div>
                                    <ul className="whatsNews-list">
                                        
                                        <li className="credit-li">
                                            <h4>Free Credits</h4>
			                                <div class="Promo-content">
                                                <p>1. <u>Register Free and Get 20 Download Credits</u></p>
                                                <p>2. Refer Friends & Get 10 Credits For each 5 Referrals who Sign Up for Free or 30 For Each Referral Who Pays at the time of Registration</p>
                                            </div>
                                        </li>
                                        <li className="credit-li">
                                            <h4>Paid Credits</h4>
			                                <div class="Promo-content">
                                                <p>1. Pay As You Go, You Get the Amount You Pay For (Credits Do Not Expired)</p>
                                                <p>2. Reccurring Subscription Credits are purchsed for a discount & add immediately</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="news-title">
                                        <img src="/images/testomonials_icon.png" alt="testomonials_icon"/>
                                        <h2>Testimonials</h2>
                                    </div>
                                    <ul className="whatsNews-list">
                                        <li className="testomonials-li">
                                            <a href="javascript.void();">See more >> </a>
                                        </li>
                                    </ul>
                                    <div className="news-title">
                                        <img src="/images/donate_icon.png" alt="donate_icon"/>
                                        <h2>Donate</h2>
                                    </div>
                                    <ul className="whatsNews-list">
                                        <li>
                                            <p className="donate-text">Creating and distributing positive and transformational music is a big job. Every donation helps to move this forward</p>
                                        </li>
                                        <li>
                                            <a href="javascript.void();"><img src="/images/donation_button.png" alt="paypal-icon"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="rightbar-panel">
                                <div className="home-carousal">
                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                 <img src="/images/do_a_beam_media_slide.png" alt="slide-img"/>
                                            </div>
                                            <div class="carousel-item">
                                                 <img src="/images/join_the_movement_slide.png" alt="slide-img"/>
                                            </div>
                                            <div class="carousel-item">
                                                 <img src="/images/explore_song_library_slide(1).png" alt="slide-img"/>
                                            </div>
                                            <div class="carousel-item">
                                                 <img src="/images/questionnaire_slide.png" alt="slide-img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="AboutHarmonize-block">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="about-content">
                                                <h2>About Harmonize Network</h2>
                                                <p>Ever since the iconic Herculite™ composite was introduced to the marketplace more than 25 years ago, our has had a legacy product with which many other composites have been compared. Later, Herculite was enhanced with nanohybrid fillers to produce Herculite® Ultra, which has been a gold standard ...</p>
                                                <a href="javascript.void();"><u>Read more...</u></a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-img">
                                                <img src="/images/about_image.png" alt="about-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="AboutHarmonize-block">
                                    <h2>See What Others Have To Say</h2>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="video-element">
                                                <div class="o-video">
                                                    <iframe src="https://www.youtube.com/embed/WPni755-Krg" frameborder="0" ></iframe>
                                                </div>
                                                <div className="video-content">
                                                    <h4>Study Music Alpha Waves</h4>
                                                    <p>This Study and Focus Music is ideal instrumental music to help you study, focus and relax before that big test or exam</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="video-element">
                                                <div class="o-video">
                                                    <iframe src="https://www.youtube.com/embed/R_vzRYTH65E" frameborder="0" ></iframe>
                                                </div>
                                                <div className="video-content">
                                                    <h4>Study Music Alpha Waves</h4>
                                                    <p>This Study and Focus Music is ideal instrumental music to help you study, focus and relax before that big test or exam</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="video-element">
                                                <div class="o-video">
                                                    <iframe src="https://player.vimeo.com/video/31882503" frameborder="0" ></iframe>
                                                </div>
                                                <div className="video-content">
                                                    <h4>Study Music Alpha Waves</h4>
                                                    <p>This Study and Focus Music is ideal instrumental music to help you study, focus and relax before that big test or exam</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="AboutHarmonize-block">
                                    <div className="row">
                                    <div className="col-md-6">
                                            <div className="about-img">
                                                <img src="/images/man_listening_headphone.png" alt="man_listening_headphone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-content">
                                                <h2>The B.E.A.M Meditation</h2>
                                                <p>After slips and relapses, I knew enough that I was not going to be able to sustain drinking. And I didn’t want to. I desperately wanted to not drink alcohol. But I often found myself drinking, sometimes crying while I lifted the bottle. I was searching for a spiritual solution… for a sense of peace ...</p>
                                                <a href="javascript.void();"><u>Read more...</u></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      stories: state.stories
    };
  };


  export default connect(
    mapStateToProps
  )(Home);