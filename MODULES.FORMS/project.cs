using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Calendator
{
    #region Project
    public class Project
    {
        #region Member Variables
        protected string _linkid;
        protected string _title;
        protected string _description;
        protected unknown _est_startdate;
        protected unknown _est_enddate;
        protected int _est_hours;
        protected unknown _actual_startdate;
        protected unknown _actual_enddate;
        protected int _actual_hours;
        protected int _est_income;
        protected int _actual_income;
        protected string _features;
        protected string _tasks;
        protected string _timesheets;
        protected string _punchcards;
        protected string _documents;
        protected bool _bid_entered;
        protected bool _bid_won;
        protected unknown _flags;
        protected unknown _x_;
        protected unknown _x_;
        protected unknown _x_;
        protected unknown _x_;
        protected unknown _x_;
        protected unknown _x_;
        #endregion
        #region Constructors
        public Project() { }
        public Project(string title, string description, unknown est_startdate, unknown est_enddate, int est_hours, unknown actual_startdate, unknown actual_enddate, int actual_hours, int est_income, int actual_income, string features, string tasks, string timesheets, string punchcards, string documents, bool bid_entered, bool bid_won, unknown flags, unknown x_, unknown x_, unknown x_, unknown x_, unknown x_, unknown x_)
        {
            this._title=title;
            this._description=description;
            this._est_startdate=est_startdate;
            this._est_enddate=est_enddate;
            this._est_hours=est_hours;
            this._actual_startdate=actual_startdate;
            this._actual_enddate=actual_enddate;
            this._actual_hours=actual_hours;
            this._est_income=est_income;
            this._actual_income=actual_income;
            this._features=features;
            this._tasks=tasks;
            this._timesheets=timesheets;
            this._punchcards=punchcards;
            this._documents=documents;
            this._bid_entered=bid_entered;
            this._bid_won=bid_won;
            this._flags=flags;
            this._x_=x_;
            this._x_=x_;
            this._x_=x_;
            this._x_=x_;
            this._x_=x_;
            this._x_=x_;
        }
        #endregion
        #region Public Properties
        public virtual string Linkid
        {
            get {return _linkid;}
            set {_linkid=value;}
        }
        public virtual string Title
        {
            get {return _title;}
            set {_title=value;}
        }
        public virtual string Description
        {
            get {return _description;}
            set {_description=value;}
        }
        public virtual unknown Est_startdate
        {
            get {return _est_startdate;}
            set {_est_startdate=value;}
        }
        public virtual unknown Est_enddate
        {
            get {return _est_enddate;}
            set {_est_enddate=value;}
        }
        public virtual int Est_hours
        {
            get {return _est_hours;}
            set {_est_hours=value;}
        }
        public virtual unknown Actual_startdate
        {
            get {return _actual_startdate;}
            set {_actual_startdate=value;}
        }
        public virtual unknown Actual_enddate
        {
            get {return _actual_enddate;}
            set {_actual_enddate=value;}
        }
        public virtual int Actual_hours
        {
            get {return _actual_hours;}
            set {_actual_hours=value;}
        }
        public virtual int Est_income
        {
            get {return _est_income;}
            set {_est_income=value;}
        }
        public virtual int Actual_income
        {
            get {return _actual_income;}
            set {_actual_income=value;}
        }
        public virtual string Features
        {
            get {return _features;}
            set {_features=value;}
        }
        public virtual string Tasks
        {
            get {return _tasks;}
            set {_tasks=value;}
        }
        public virtual string Timesheets
        {
            get {return _timesheets;}
            set {_timesheets=value;}
        }
        public virtual string Punchcards
        {
            get {return _punchcards;}
            set {_punchcards=value;}
        }
        public virtual string Documents
        {
            get {return _documents;}
            set {_documents=value;}
        }
        public virtual bool Bid_entered
        {
            get {return _bid_entered;}
            set {_bid_entered=value;}
        }
        public virtual bool Bid_won
        {
            get {return _bid_won;}
            set {_bid_won=value;}
        }
        public virtual unknown Flags
        {
            get {return _flags;}
            set {_flags=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        public virtual unknown X_
        {
            get {return _x_;}
            set {_x_=value;}
        }
        #endregion
    }
    #endregion
}