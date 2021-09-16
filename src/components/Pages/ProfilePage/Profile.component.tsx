import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Formik, Field, Form } from "formik";
import Icons from "../../common/Icons";
import {Close, Edit, HeaderItem, LeftSide, ProfileForm, ProfileHeader, ProfileWrapper, RightSide, SeeProfile, TextField, User, UserInfo, UserPhoto, UserWrapper} from './Profile.styles'
import {ProfileSectionTwo} from './ProfileSecion2/ProfileSection2.component';

interface IProfilePage{
  user:{
    id:number,
    name: string,
    imgUrl:string,
    jobTitle: string,
    companyName: string,
    email: string,
    phone: string,
    city: string,
  }
}

export const ProfilePage: FC <IProfilePage> = props => {
  const [toggle, setToggle] =useState(true)
    return (
        <ProfileWrapper>
          <ProfileHeader>
            <HeaderItem beforeImg = {Icons.messageIcon}>Message</HeaderItem>
            <HeaderItem beforeImg = {Icons.requestIcon}>Create a request</HeaderItem>
            <HeaderItem beforeImg = {Icons.suitcaseIcon}>Add to a cluster</HeaderItem>
            <Close/>
          </ProfileHeader>
          <UserWrapper>
            <Formik
            enableReinitialize={true} 
            initialValues={{
              fullName: props.user.name? props.user.name : '',
              companyName: props.user.companyName? props.user.companyName: '',
              location: props.user.city? props.user.city: '',
              jobTitle: props.user.jobTitle? props.user.jobTitle: '',
              email: props.user.email? props.user.email: '',
              phone: props.user.phone? props.user.phone: '',
            }}  onSubmit={(data)=> console.log(data) }>

           <ProfileForm >
              <User>
                <UserPhoto imgUrl = {props.user.imgUrl}/>
                <SeeProfile>See profile</SeeProfile>
              </User>
              <UserInfo> 
              <LeftSide>                
                <TextField name="fullName" bold= {true} disabled = {toggle}/>
                <TextField name="companyName"bold= {true}disabled = {toggle}/>
                <TextField name="location" disabled = {toggle} />
                <TextField name="jobTitle"disabled = {toggle} />
              </LeftSide>
              <RightSide>
                <Edit type = 'submit' onClick={() => setToggle((prevToggle => !prevToggle))} />
                <TextField name="email" disabled = {toggle} />
                <TextField name="phone"disabled = {toggle} />
              </RightSide>
              </UserInfo>
            </ProfileForm>
            </Formik>
          </UserWrapper>
          <ProfileSectionTwo/>
        </ProfileWrapper>
      );
};
