import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import api from '../../services/ApiServices';
import axios from 'axios'
import {
  Container,
  Content,
  Text,
  Button,
  View,
  Icon,
  Input,
  Item,
  Form,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Select, Option} from 'react-native-chooser';
import {
  FormInput,
  ActionButton,
  Account,
  GifComponent,
  ActionText,
  Title,
} from '../../Components/FormComponents/FormCompponents';
import {GenderCheckbox} from '../../Components/Signup/Signup';
import signupStyles from '../../Components/Signup/signup.styles';
import FormData from '../../utils/formData';
import Colors from '../../constants/Color';

const Signup = ({navigation}, props) => {
  const formData = new FormData({
    isAdmin: false,
  });

  const filledData = formData.getData();

  const today = new Date();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPAssword] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState();
  const [date, setDate] = useState(new Date(today));
  const [showCalendar, setShowCalendar] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',

    check_textInputChange: false,
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const onChangeDate = (event, selectedDate) => {
    console.log(gender);
    const currentDate = selectedDate || date;

    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);

    var dateSelected = currentDate
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/');
    console.log(dateSelected);
    getDOB(dateSelected);
    // setDob(dateSelected);
    yearRange: '-99:-18';
  };

  const getName = _name => {
    //setName(_name);
    // formData.addData({Name: _name});
    setData({...data, name: _name, isValidName: true});
  };
  const getEmail = _email => {
    // setEmail(_email);
    // formData.addData({Email: _email});
    setData({...data, email: _email, isValidEmail: true});
  };
  const getPassword = _password => {
    // setPassword(_password);
    // formData.addData({Password: _password});
    setData({...data, password: _password, isValidPassword: true});
  };
  const getConfirmPassword = _confirmPassword => {
    // setConfirmPAssword(_confirmPassword);
    // formData.addData({ConfirmPassword: _confirmPassword});
    setData({
      ...data,
      confirmPassword: _confirmPassword,
      isValidConfirmPassword: true,
    });
  };
  const getGender = _gender => {
    setGender(_gender);
  };
  const getCity = _city => {
    setCity(_city);
    formData.addData({City: _city});
  };
  const getDOB = _dob => {
    setDob(_dob);
    formData.addData({DOB: _dob});
  };

  const handleValidName = () => {
    if (data.name.trim().length >= 2) {
      setData({
        ...data,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        isValidName: false,
      });
    }
  };

  const handleValidEmail = () => {
    if (data.email.includes('@')) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };
  const handleValidPassword = () => {
    if (data.password.length >= 6) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };
  const handleValidConfirmPassword = () => {
    if (data.password === data.confirmPassword) {
      setData({
        ...data,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidConfirmPassword: false,
      });
    }
  };

  var newUser = JSON.stringify({
    "name": data.name,
    "email": data.email,
    "password": data.password,
    "gender": gender.name,
    "isAdmin": false,
    "city": city,
    "DOB": dob,
  });

  var config = {
    method: 'post',
    url: 'http://10.0.2.2:8080/api/user/signup',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: newUser,
  };

  const submitValues = () => {
    axios(config)
      .then(function (res) {
        console.log(res)
        setData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
  
          check_textInputChange: false,
          isValidName: true,
          isValidEmail: true,
          isValidPassword: true,
          isValidConfirmPassword: true,
        });
        //alert('Check Email for verification')
        navigation.navigate('Home');
      })
      .catch(function (error) {
        // console.log(error.response.data.error_description);
        console.log(error);
  
      });
  }


  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
            <GifComponent />
            <Title />
            <ActionText text="CREATE AN ACCOUNT" />
            <View
              style={{
                borderWidth: 3,
                borderColor: 'black',
                width: '80%',
                marginBottom: 20,
                opacity: 0.1,
                borderRadius: 10,
                shadowColor: 'black',
                elevation: 8,
              }}></View>
            <Form>
              <FormInput
                icon="pencil"
                placeholder="Full Name"
                onChangeText={getName}
                value={data.name}
                onBlur={() => handleValidName()}
              />
              {data.isValidName ? null : (
                <Text
                  style={{color: '#FF0000', fontSize: 14, marginBottom: 10}}>
                  Please Provide Valid Full Name
                </Text>
              )}
              <FormInput
                icon="mail-outline"
                placeholder="Email Address"
                value={data.email}
                onChangeText={getEmail}
                onBlur={() => handleValidEmail()}
              />
              {data.isValidEmail ? null : (
                <Text
                  style={{color: '#FF0000', fontSize: 14, marginBottom: 10}}>
                  Please Provide Valid Email
                </Text>
              )}
              <FormInput
                icon="key"
                placeholder="Password"
                value={data.password}
                onChangeText={getPassword}
                onBlur={() => handleValidPassword()}
              />
              {data.isValidPassword ? null : (
                <Text
                  style={{color: '#FF0000', fontSize: 14, marginBottom: 10}}>
                  Password must me 6 characters long
                </Text>
              )}
              <FormInput
                icon="key"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChangeText={getConfirmPassword}
                onBlur={() => handleValidConfirmPassword()}
              />
              {data.isValidConfirmPassword ? null : (
                <Text
                  style={{color: '#FF0000', fontSize: 14, marginBottom: 10}}>
                  Password and confirm password doesn't match
                </Text>
              )}
              <FormInput
                icon="calendar"
                placeholder="Date of Birth"
                value={dob}
                onChangeText={getDOB}
                onFocus={() => setShowCalendar(true)}
              />

              {showCalendar ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeDate}
                  yearRange="-99:-18"
                />
              ) : null}
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: 10,
                  fontSize: 19,
                  color: '#000000',
                  fontWeight: '600',
                }}>
                Gender
              </Text>
              <GenderCheckbox setGender={setGender} />
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: 10,
                  fontSize: 19,
                  color: '#000000',
                  fontWeight: '600',
                }}>
                Select your City
              </Text>
              <View style={signupStyles.dropdown}>
                <Select
                  onSelect={val => getCity(val)}
                  defaultText="Select City"
                  style={{borderWidth: 0, width: '100%'}}
                  textStyle={{fontSize: 17}}
                  backdropStyle={{backgroundColor: 'transparent'}}
                  optionListStyle={[
                    signupStyles.dropdownItem,
                    {height: 'auto', maxHeight: '80%'},
                  ]}
                  transparent={true}
                  selected={city}
                  selectedStyle={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: 20,
                  }}>
                  <Option value={{name: 'pkr'}}>Pokhara</Option>
                  <Option value="ktm">Kathmandu</Option>
                  <Option value="brt">Biratnagar</Option>
                  <Option value="jnk">Janakpur</Option>
                  <Option value="Dharan">Dharan</Option>
                  <Option value="Dhulikhel">Dhulikhel</Option>
                  <Option value="jhapa">Jhapa</Option>
                  <Option value="lalitpur">Lalitpur</Option>
                  <Option value="Birgunj">Birgunj</Option>
                </Select>
              </View>
            </Form>

            <ActionButton
              buttonName="Sign up"
              home={() => submitValues()}
            />
            <Account
              text="Already have an Account? "
              action="Login"
              signup={() => navigation.navigate('Signin')}
            />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signup;
