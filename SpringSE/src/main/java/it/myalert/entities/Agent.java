package it.myalert.entities;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@Entity(name="agent")
public class Agent implements Serializable {

    /** Primary key. */
    protected static final String PK = "idAgent";


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(unique=true, nullable=false, precision=10)
    private Integer idAgent;
    @Column(name="Lat")
    private Double lat;
    @Column(name="Lon")
    private Double lon;
    @Column(name="HireDate")
    private Timestamp hireDate;
    @Column(name="EndDate")
    private Timestamp endDate;
    @ManyToOne(optional=false)
    @JoinColumn(name="idManager_FK", nullable=false)
    private Manager manager;
    @ManyToOne(optional=false, cascade= {CascadeType.PERSIST})
    @JoinColumn(name="idUser_FK", nullable=false)
    private User user;
    @OneToMany(mappedBy="agent")
    private Set<Assign> assign;

    /** Default constructor. */
    public Agent() {
        super();
    }

    /**
     * Access method for idAgent.
     *
     * @return the current value of idAgent
     */
    public Integer getIdAgent() {
        return idAgent;
    }

    /**
     * Setter method for idAgent.
     *
     * @param aIdAgent the new value for idAgent
     */
    public void setIdAgent(Integer aIdAgent) {
        idAgent = aIdAgent;
    }

    /**
     * Access method for lat.
     *
     * @return the current value of lat
     */
    public Double getLat() {
        return lat;
    }

    /**
     * Setter method for lat.
     *
     * @param aLat the new value for lat
     */
    public void setLat(Double aLat) {
        lat = aLat;
    }

    /**
     * Access method for lon.
     *
     * @return the current value of lon
     */
    public Double getLon() {
        return lon;
    }

    /**
     * Setter method for lon.
     *
     * @param aLon the new value for lon
     */
    public void setLon(Double aLon) {
        lon = aLon;
    }

    /**
     * Access method for hireDate.
     *
     * @return the current value of hireDate
     */
    public Timestamp getHireDate() {
        return hireDate;
    }

    /**
     * Setter method for hireDate.
     *
     * @param aHireDate the new value for hireDate
     */
    public void setHireDate(Timestamp aHireDate) {
        hireDate = aHireDate;
    }

    /**
     * Access method for endDate.
     *
     * @return the current value of endDate
     */
    public Timestamp getEndDate() {
        return endDate;
    }

    /**
     * Setter method for endDate.
     *
     * @param aEndDate the new value for endDate
     */
    public void setEndDate(Timestamp aEndDate) {
        endDate = aEndDate;
    }

    /**
     * Access method for manager.
     *
     * @return the current value of manager
     */
    public Manager getManager() {
        return manager;
    }

    /**
     * Setter method for manager.
     *
     * @param aManager the new value for manager
     */
    public void setManager(Manager aManager) {
        manager = aManager;
    }

    /**
     * Access method for user.
     *
     * @return the current value of user
     */
    public User getUser() {
        return user;
    }

    /**
     * Setter method for user.
     *
     * @param aUser the new value for user
     */
    public void setUser(User aUser) {
        user = aUser;
    }

    /**
     * Access method for assign.
     *
     * @return the current value of assign
     */
    public Set<Assign> getAssign() {
        return assign;
    }

    /**
     * Setter method for assign.
     *
     * @param aAssign the new value for assign
     */
    public void setAssign(Set<Assign> aAssign) {
        assign = aAssign;
    }

    /**
     * Compares the key for this instance with another Agent.
     *
     * @param other The object to compare to
     * @return True if other object is instance of class Agent and the key objects are equal
     */
    private boolean equalKeys(Object other) {
        if (this==other) {
            return true;
        }
        if (!(other instanceof Agent)) {
            return false;
        }
        Agent that = (Agent) other;
        if (this.getIdAgent() != that.getIdAgent()) {
            return false;
        }
        return true;
    }

    /**
     * Compares this instance with another Agent.
     *
     * @param other The object to compare to
     * @return True if the objects are the same
     */
    @Override
    public boolean equals(Object other) {
        if (!(other instanceof Agent)) return false;
        return this.equalKeys(other) && ((Agent)other).equalKeys(this);
    }

    /**
     * Returns a hash code for this instance.
     *
     * @return Hash code
     */
    @Override
    public int hashCode() {
        int i;
        int result = 17;
        i = getIdAgent();
        result = 37*result + i;
        return result;
    }

    /**
     * Returns a debug-friendly String representation of this instance.
     *
     * @return String representation of this instance
     */
    @Override
    public String toString() {
        StringBuffer sb = new StringBuffer("[Agent |");
        sb.append(" idAgent=").append(getIdAgent());
        sb.append("]");
        return sb.toString();
    }

    /**
     * Return all elements of the primary key.
     *
     * @return Map of key names to values
     */
    public Map<String, Object> getPrimaryKey() {
        Map<String, Object> ret = new LinkedHashMap<String, Object>(6);
        ret.put("idAgent", Integer.valueOf(getIdAgent()));
        return ret;
    }

}
