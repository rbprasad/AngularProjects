/**
 * Created by bprasad on 10/19/2015.
 */

eventsApp.factory('eventData',function(){
        return{
            event : {
                name: 'Angular Boot Camp',
                date: '10/18/2015',
                time: '10:30 am',
                location: {
                    address: 'Google Headquarters',
                    city:'Mountain View',
                    province:'CA'

                },
                imageUrl:'/img/angularjs-logo.png',
                sessions: [
                    {
                        name:'Directives Masterclass',
                        creatorName:'Bob Smith',
                        duration:'1 hr',
                        level:'Advanced',
                        abstract:'In this session we will cover basics for Directives',
                        upVoteCount:3

                    },
                    {
                        name:'Scopes for fun and profit',
                        creatorName:'Matt davis',
                        duration:'2 hrs',
                        level:'Beginner',
                        abstract:'In this session we will cover basics for Scopes',
                        upVoteCount:5
                    },
                    {
                        name:'Well behaved controllers',
                        creatorName:'Jonny Ive',
                        duration:'5 hr',
                        level:'Advanced',
                        abstract:'In this session we will cover Controllers',
                        upVoteCount:2

                    }

                ]
            }



    };

    }

);