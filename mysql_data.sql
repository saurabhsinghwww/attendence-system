create table IF NOT EXISTS user(id integer, name varchar(100));
delete from user;
insert into user(id, name) values (1, 'Saurabh');

CREATE TABLE IF NOT EXISTS `psh_raw` (`rid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Row unique id',`fk_user` int(11) NOT NULL COMMENT 'Reference to user table',`time` datetime NOT NULL,`direct` int(11) NOT NULL COMMENT 'Enter = 1; Leave = 0',`type` int(11) NOT NULL COMMENT 'Type of leave: General = 1;Vacation = 2;Doctor = 3...', PRIMARY KEY (`rid`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

delete from psh_raw;

insert into psh_raw(rid, fk_user, time, direct, type) values(1, 1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+1 DAY), INTERVAL 8 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+1 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+2 DAY), INTERVAL 8 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+2 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+5 DAY), INTERVAL 7 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+5 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+6 DAY), INTERVAL 9 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+6 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+10 DAY), INTERVAL 5 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+10 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+15 DAY), INTERVAL 2 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+15 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+16 DAY), INTERVAL 6 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+16 DAY), 0, 1);


insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+20 DAY), INTERVAL 2 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+20 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+21 DAY), INTERVAL 4 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+21 DAY), 0, 1);

insert into psh_raw(fk_user, time, direct, type) values(1, DATE_SUB(date_add(NOW(),interval -DAY(NOW())+22 DAY), INTERVAL 8 HOUR), 1, 1);
insert into psh_raw(fk_user, time, direct, type) values(1, date_add(NOW(),interval -DAY(NOW())+22 DAY), 0, 1);

select DATE_FORMAT(psw1.time,'%M-%d'), TIMESTAMPDIFF(HOUR, psw1.time, psw2.time)  as time_spend from psh_raw psw1, psh_raw psw2, user where psw1.fk_user = psw2.fk_user and psw1.direct = 1 and psw2.direct = 0 and psw1.type = 1 and psw2.type = 1
and psw1.fk_user = id and name = 'Saurabh' and psw1.time between "2018-03-01 00:00:00" and "2018-03-31 23:59:59" and psw2.time between "2018-03-01 00:00:00" and "2018-03-31 23:59:59"
and DATE_FORMAT(psw1.time,'%M-%d') = DATE_FORMAT(psw2.time,'%M-%d')
order by psw1.time, psw2.time;