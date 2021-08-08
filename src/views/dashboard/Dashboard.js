import React, { useState,useEffect } from 'react'
import { Link,Switch, Route, useRouteMatch } from 'react-router-dom'
import $ from 'jquery'

import './dashboard.scss'
import Logo from '../../images/app-images/logo.svg'

import NewContactForm from '../contacts/NewContact.js'



const Dashboard = () => {
    let match = useRouteMatch();
    
    return (
    <div className="dashboard">

        <div className="sidebar">
            <div className="logo"><Link to="/dashboard">
                <img src={Logo} alt="" srcset=""/>
                </Link></div>
            <div className="quick-actions">
                <Link to="/dashboard/new/contact">
                    <div className="action contacts">
                    <div className="count">
                        <div className="count-display">25</div>
                    </div>
                    <div className="label">Contacts</div>
                    <div className="add">
                        <div className="add-button">+</div>
                    </div>
                    </div>

                </Link>

                <Link to="/dashboard/new/connection">
                    <div className="action connections">
                        
                    <div className="count">
                        <div className="count-display">25</div>
                        </div>
                        <div className="label">Connections</div>
                        <div className="add">
                            <div className="add-button">+</div>
                        </div>
                    </div>
                </Link>
            </div>


            <div className="quick-displays">
                <div className="quick-display future-connections">
                    <div className="display-label">Future Connections</div>
                    <div className="content">
                        <div className="content-label">Today</div>
                        <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                        </div>
                        <div className="see-all">See All</div>
                    </div>
                    <div className="content">
                        <div className="content-label">This Week</div>
                        <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                        </div>
                        <div className="see-all">See All</div>
                    </div>
                </div>
                <div className="quick-display future-connections">
                    <div className="display-label">Top Connections</div>
                    <div className="content">
                        <div className="content-label">Today</div>
                        <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                        </div>
                        <div className="see-all">See All</div>
                    </div>
                    <div className="content">
                        <div className="content-label">This Week</div>
                        <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                        </div>
                        <div className="see-all">See All</div>
                    </div>
                </div>
            </div>
        </div>

        <main>
            <header>
                <div className="search">Search...</div>
                <div className="settings-panel">
                    <div className="notifications"></div>
                    <div className="profile">
                        <div className="profile-name">Alice Moron</div>
                        <div className="profile-image"></div>
                    </div>
                </div>
            </header>
            <div className="main-panel">
                <section className="title">
                    <h1>Winning Relations never stop Connections</h1>
                </section>
                <section  className="flexible-tile">flexible-tile</section>
                <section className="contacts">
                    <div className="section-label">Contacts</div>
                    <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                    </div>
                </section>
                <section className="timeline">
                    <div className="section-label">Timeline</div>
                    <div className="content-list list">
                            <div className="list-item contact-name">Myra Baker</div>
                            <div className="list-item contact-name">Peterson</div>
                    </div>
                    </section>
                <section className="additional-panel">
                    <Route path={`${match.path}/new/contact`}>
                        <NewContact />
                    </Route>
                    <Route path={`${match.path}/new/connection`}>
                        <NewConnection />
                    </Route>
                    
                </section>
                <div className="loading">
                    <div className="value"></div>
                </div>
            </div>
        </main>
        <div className="testing-tools">
            <div className="button-test" onClick={() => {
                if($('.main-panel').hasClass('with-additional-panel')){
                    console.log('deactivating Panel....')
                    
                $('.main-panel').removeClass('with-additional-panel');
                }
                else{
                    console.log('activating Panel....')
                    
                    $('.main-panel').addClass('with-additional-panel');
                }
            }}>Toggle additional Panel</div>
        </div>
    </div>
)
    }

export default Dashboard

function NewContact() {
    useEffect(() => {
        setTimeout(function(){
            $('.main-panel').addClass('with-additional-panel');
            $('.main-panel').removeClass('with-additional-panel__middleanimation');
            $('.loading').removeClass('active');

        }, 1000);
      });
      useEffect(() => {
        return () => {
            $('.main-panel').addClass('with-additional-panel__middleanimation');
            $('.loading').addClass('active');
        }
    }, [])
    return (
        <div className="option-control change-name">
            <NewContactForm/>
        </div>
        
    )
}
function NewConnection() {
    
    useEffect(() => {
        setTimeout(function(){
            $('.main-panel').addClass('with-additional-panel');
            $('.main-panel').removeClass('with-additional-panel__middleanimation');
            $('.loading').removeClass('active');
        }, 1000);
      });

      useEffect(() => {
        return () => {
            $('.main-panel').addClass('with-additional-panel__middleanimation');
            $('.loading').addClass('active');
        }
    }, [])
    return (
        <div className="option-control change-name">
            h1 New Connection
        </div>
        
    )
}
