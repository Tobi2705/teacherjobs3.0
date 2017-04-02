import React, { Component } from 'react';
import Filters from './filters.js';
import Jobs  from './jobs.js';
import Pagination from './Pagination.js';

export default class JobsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [
                { description: 'here is a job'},
                { description: 'here is a job1'},
                { description: 'here is a job2'}

            ],
            pageInfo: {
                currentPage: 1,
                pageSize: 20
            },
            filterInfo: {
                city: '',
                country: '',
                categories: []
            }
        }

        //Bind fuctions correctly to this class
        this.onPaginate = this.onPaginate.bind(this);
    }

    onPaginate(page) {
        // @TODO get new data from the server
        console.log(page);
    }

    render() {
        return (
           <div>
               <Filters></Filters>
               <Jobs data={ this.state.jobs }></Jobs>
               <Pagination pageInfo = { this.state.pageInfo } onPaginate= {this.onPaginate} /> 
           </div>
        )
    }
}