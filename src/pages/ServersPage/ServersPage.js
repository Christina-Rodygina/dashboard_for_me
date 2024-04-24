import React, {useEffect, useState} from "react";
import "./view"
import axios from "axios";
// import {URL} from "../../App";

const ServersPage = ({dataColumn, title, functions}) => {
    // const [passwordVisibility, setPasswordVisibility] = useState({});
    const [data, setData] = useState([
        [
            {
                "level": "info",
                "id": 7771,
                "date": "2024-04-23T18:34:56.776917+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7772,
                "date": "2024-04-23T18:39:56.784718+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7773,
                "date": "2024-04-23T18:44:56.792467+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7774,
                "date": "2024-04-23T18:49:56.799060+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7775,
                "date": "2024-04-23T18:54:56.808102+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7776,
                "date": "2024-04-23T18:59:56.815200+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7777,
                "date": "2024-04-23T19:04:56.821461+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7778,
                "date": "2024-04-23T19:09:56.826885+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7779,
                "date": "2024-04-23T19:14:56.832656+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7780,
                "date": "2024-04-23T19:19:56.842112+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7781,
                "date": "2024-04-23T19:24:56.848441+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7782,
                "date": "2024-04-23T19:27:02.735475+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7783,
                "date": "2024-04-23T19:32:02.746755+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7784,
                "date": "2024-04-23T19:37:02.755324+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7785,
                "date": "2024-04-23T19:42:02.761587+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7786,
                "date": "2024-04-23T19:47:02.772617+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7787,
                "date": "2024-04-23T19:52:02.778746+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7788,
                "date": "2024-04-23T19:53:54.260465+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7789,
                "date": "2024-04-23T19:58:54.269194+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7790,
                "date": "2024-04-23T20:03:54.274640+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7791,
                "date": "2024-04-23T20:08:54.282146+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7792,
                "date": "2024-04-23T20:13:54.289397+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7793,
                "date": "2024-04-23T20:18:54.296169+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7794,
                "date": "2024-04-23T20:23:54.302711+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7795,
                "date": "2024-04-23T20:28:54.312142+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7796,
                "date": "2024-04-23T20:33:54.333697+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7797,
                "date": "2024-04-23T20:38:54.342164+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7798,
                "date": "2024-04-23T20:43:54.353128+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7799,
                "date": "2024-04-23T20:48:54.359292+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7800,
                "date": "2024-04-23T20:53:54.365774+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7801,
                "date": "2024-04-23T20:58:54.377701+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7802,
                "date": "2024-04-23T21:03:54.387173+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7803,
                "date": "2024-04-23T21:08:54.393910+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7804,
                "date": "2024-04-23T21:13:54.400588+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7805,
                "date": "2024-04-23T21:18:54.409623+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7806,
                "date": "2024-04-23T21:23:54.417493+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7807,
                "date": "2024-04-23T21:28:54.424954+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7808,
                "date": "2024-04-23T21:33:54.431518+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7809,
                "date": "2024-04-23T21:38:54.438381+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7810,
                "date": "2024-04-23T21:43:54.445355+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7811,
                "date": "2024-04-23T21:48:54.452528+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7812,
                "date": "2024-04-23T21:53:54.458743+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7813,
                "date": "2024-04-23T21:58:54.465497+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7814,
                "date": "2024-04-23T22:03:54.471796+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7815,
                "date": "2024-04-23T22:08:54.480450+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7816,
                "date": "2024-04-23T22:13:54.490578+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7817,
                "date": "2024-04-23T22:18:54.496821+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7818,
                "date": "2024-04-23T22:23:54.503531+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7819,
                "date": "2024-04-23T22:28:54.510697+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7820,
                "date": "2024-04-23T22:33:54.517025+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7821,
                "date": "2024-04-23T22:38:54.523907+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7822,
                "date": "2024-04-23T22:43:54.530119+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7823,
                "date": "2024-04-23T22:48:54.536827+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7824,
                "date": "2024-04-23T22:53:54.543769+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7825,
                "date": "2024-04-23T22:58:54.550369+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7826,
                "date": "2024-04-23T23:03:54.556772+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7827,
                "date": "2024-04-23T23:08:54.567577+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7828,
                "date": "2024-04-23T23:13:54.574411+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7829,
                "date": "2024-04-23T23:18:54.582594+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7830,
                "date": "2024-04-23T23:23:54.588833+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7831,
                "date": "2024-04-23T23:28:54.596357+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7832,
                "date": "2024-04-23T23:33:54.609935+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7833,
                "date": "2024-04-23T23:38:54.616872+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7834,
                "date": "2024-04-23T23:43:54.624161+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7835,
                "date": "2024-04-23T23:48:54.631082+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7836,
                "date": "2024-04-23T23:53:54.637602+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7837,
                "date": "2024-04-23T23:58:54.643993+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7838,
                "date": "2024-04-24T00:03:54.650261+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7839,
                "date": "2024-04-24T00:08:54.657215+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7840,
                "date": "2024-04-24T00:13:54.665303+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7841,
                "date": "2024-04-24T00:18:54.671473+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7842,
                "date": "2024-04-24T00:23:54.677559+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7843,
                "date": "2024-04-24T00:28:54.686507+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7844,
                "date": "2024-04-24T00:33:54.692506+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7845,
                "date": "2024-04-24T00:38:54.698408+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7846,
                "date": "2024-04-24T00:43:54.705053+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7847,
                "date": "2024-04-24T00:48:54.713659+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7848,
                "date": "2024-04-24T00:53:54.721792+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7849,
                "date": "2024-04-24T00:58:54.728834+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7850,
                "date": "2024-04-24T01:03:54.736183+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7851,
                "date": "2024-04-24T01:08:54.742841+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7852,
                "date": "2024-04-24T01:13:54.749730+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7853,
                "date": "2024-04-24T01:18:54.757417+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7854,
                "date": "2024-04-24T01:23:54.764839+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7855,
                "date": "2024-04-24T01:28:54.772055+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7856,
                "date": "2024-04-24T01:33:54.778634+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7857,
                "date": "2024-04-24T01:38:54.784227+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7858,
                "date": "2024-04-24T01:43:54.795784+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7859,
                "date": "2024-04-24T01:48:54.806162+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7860,
                "date": "2024-04-24T01:53:54.811814+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7861,
                "date": "2024-04-24T01:58:54.819689+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7862,
                "date": "2024-04-24T02:03:54.827612+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7863,
                "date": "2024-04-24T02:08:54.834728+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7864,
                "date": "2024-04-24T02:13:54.841860+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7865,
                "date": "2024-04-24T02:18:54.847454+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7866,
                "date": "2024-04-24T02:23:54.853819+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7867,
                "date": "2024-04-24T02:28:54.861435+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7868,
                "date": "2024-04-24T02:33:54.868059+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7869,
                "date": "2024-04-24T02:38:54.874511+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            },
            {
                "level": "info",
                "id": 7870,
                "date": "2024-04-24T02:43:54.881170+00:00",
                "message": "Сервера не найдены.",
                "filename": "/home/AdminPanelKrianseBackend/src/server/tasks.py",
                "line": "14"
            }
        ],
        {
            "total": 212
        }
    ])
    const tableWidth = document.querySelector(".servers__table")?.offsetWidth;
    const headerHeight = document.querySelector(".header__container")?.offsetHeight;
    const tableHeaderHeight = document.querySelector(".servers__table")?.offsetHeight;
    const windowHeight = window.innerHeight;

    // const togglePasswordVisibility = (index) => {
    //     setPasswordVisibility(prevState => ({
    //         ...prevState, [index]: !prevState[index] // инвертируем значение видимости пароля
    //     }));
    // };

    const openDeletion = (itemId, bool) => {
        const section = document.getElementById(`confirmation-deletion-${itemId}`);
        if (section.classList.contains("open")) {
            section.classList.remove("open");
        } else {
            section.classList.add("open");
        }

        if (bool) {
            console.log(`Удален сервер ${itemId}`)
        }
    }

    // const openInfoOrEdit = (id, action) => {
    //     if (action === 'watch') {
    //         onSidebarUpdate('watchServer');
    //     } else if (action === 'edit') {
    //         onSidebarUpdate('editServer');
    //     }
    // };

    // const get_request = async (title) => {
    //     try {
    //         const response = await axios.get(title !== 'log' ?
    //             `${URL}/${title}/get-${title}` :
    //             `${URL}/${title}/get-${title}?reverse=true`);
    //         if (response.status === 200) {
    //             setData(response.data)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const date_constructor = (timeString) => {
        const date = new Date(timeString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }

    // const functions_buttons = async (functions) => {
    //     if (functions === 'clear') {
    //         try {
    //             const response = await axios.delete(`${URL}/${title}/clear-${title}`)
    //             if (response.status === 200) {
    //                 await get_request(title)
    //             } else {
    //                 console.log("An error occurred while clearing the data")
    //             }
    //
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }

    // useEffect(() => {
    //     get_request(title)
    // }, [title])


    return (
        <>
            <div className="servers">
                <div className="container servers__container">
                    <h2>{''}</h2>
                    <div className="servers__column">

                        <div className="server-btns">
                            {functions?.includes('clear') ? (
                                <div className="log-btn">
                                    <button>Clear</button>
                                </div>
                            ) : functions?.includes('add') ? (
                                <div className="add-btn">
                                    <button>+</button>
                                </div>
                            ) : null}
                        </div>
                        <table className="servers__table">
                            <thead>
                            <tr>
                                <th>
                                    <div className="random-blob number">
                                        <span>BTN</span>
                                    </div>
                                </th>
                                {dataColumn.map((item, index) => (
                                    <th key={index} tabIndex={index}>
                                        <div className="random-blob number">
                                                <span>
                                                    {item.name.length > 3 ?
                                                        (item.name[0].toUpperCase() + item.name.slice(1)) :
                                                        (item.name.toUpperCase())}
                                                </span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data && data[0].length > 0 ? (
                                data[0].map((rowData, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td>
                                                <span className="span__buttons">
                                                    {title !== 'log' ? (
                                                        <>
                                                            <button>
                                                                <img src="/view-svgrepo-com.svg" alt="Watch"/>
                                                            </button>
                                                            <button>
                                                                <img src="/edit-svgrepo-com.svg" alt="Edit"/>
                                                            </button>
                                                        </>
                                                    ) : null}
                                                    <button onClick={() => openDeletion(rowData.id)}>
                                                        <img src="/delete-2-svgrepo-com.svg" alt="Delete"/>
                                                    </button>
                                                    <div id={`confirmation-deletion-${rowData.id}`}
                                                         className="confirmation-deletion">
                                                        <span>Are you sure you want to delete this {title}<b
                                                            style={{marginLeft: "4px"}}>{title !== 'log' ? rowData.name : rowData.id}</b>?</span>
                                                        <div className="confirmation-deletion__btns">
                                                            <button
                                                                onClick={() => openDeletion(rowData.id, true)}>Ok</button>
                                                            <button
                                                                onClick={() => openDeletion(rowData.id)}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </span>
                                        </td>
                                        {dataColumn.map((column, columnIndex) => (
                                            <td key={columnIndex}>
                                                {column.name !== 'date' ? (
                                                    <span>{rowData[column.name]}</span>
                                                ) : (
                                                    <span>{date_constructor(rowData[column.name])}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : null}
                            </tbody>
                        </table>
                        {data && data[0].length === 0 ? (
                            <div className="box" style={
                                {
                                    width: tableWidth,
                                    height: windowHeight - headerHeight - tableHeaderHeight - 50,
                                }
                            }><b></b></div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>)
}

export default ServersPage