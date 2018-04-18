import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-117110862-1');

const isDev = process.env.NODE_ENV === 'development';

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (!isDev) {
      GoogleAnalytics.set({
        page,
        ...options,
      });
      GoogleAnalytics.pageview(page);
    }
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
