import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screen/HomeScreen'
import Product from '../screen/Product'
import Profile from '../screen/Profile'
import CourseBuy from '../screen/CourseBuy'
import Payment from '../screen/Payment'
import Project from '../screen/Project'
import Certification from '../screen/Certification'
import ContactUS from '../screen/ContactUS'
import CourseTest from '../screen/CourseTest'
import Inquiry from '../screen/Inquiry'
import LeaveApplied from '../screen/LeaveApplied'
import MockTest from '../screen/MockTest'
import Notification from '../screen/Notification'
import Offer from '../screen/Offer'
import DemoVideo from '../screen/DemoVideo'
import ReferandEarn from '../screen/ReferandEarn'
import PrivacyPolicy from '../screen/PrivacyPolicy'
import Schedule from '../screen/Schedule'
import SupportAndHelp from '../screen/SupportAndHelp'
import TermsANDConditions from '../screen/TermsANDConditions'
const drawer =createDrawerNavigator()
export default function Router(){
    return(
        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen name="Home" component={HomeScreen}/>
                <drawer.Screen name="Product" component={Product}/>
                <drawer.Screen name="Profile" component={Profile}/>
                <drawer.Screen name="Course Buy" component={CourseBuy}/>
                <drawer.Screen name="Payment" component={Payment}/>
                <drawer.Screen name="Project" component={Project}/>
                <drawer.Screen name="Course Test" component={CourseTest}/>
                <drawer.Screen name="Certification" component={Certification}/>
                <drawer.Screen name="Notification" component={Notification}/>
                <drawer.Screen name="Inquiry" component={Inquiry}/>
                <drawer.Screen name="Mock Test" component={MockTest}/>
                <drawer.Screen name="Demo Video" component={DemoVideo}/>
                <drawer.Screen name="Offer" component={Offer}/>
                <drawer.Screen name="Refer and Earn" component={ReferandEarn}/>
                <drawer.Screen name="Schedule" component={Schedule}/>
                <drawer.Screen name="Leave Applied" component={LeaveApplied}/>
                <drawer.Screen name="Support And Help" component={SupportAndHelp}/>
                <drawer.Screen name="Contact US" component={ContactUS}/>
                <drawer.Screen name="Privacy Policy" component={PrivacyPolicy}/>
                <drawer.Screen name="Terms AND Conditions" component={TermsANDConditions}/>

            </drawer.Navigator>

        </NavigationContainer>
    )
}