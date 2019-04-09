import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import PageLoading from '@/components/PageLoading';

@connect(({ login, loading }) => ({
    login,
    loading: loading.effects['login/login'],
}))
class Github extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'login/github',
        });
    }

    render() {
        return (<PageLoading />);
    }
}

export default Github;